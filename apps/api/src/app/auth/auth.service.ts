import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TokenService } from './token/token.service';
import { Role } from './rbac/role.enum';
import { User } from '../../schemas/user.schema';
import { comparePassword, hashPassword } from '../../services/bcrypt.service';
import type { UserLoginReq, UserRegisterReq } from '@hospe/types';
import { NotificationService } from '../notification/notification.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<User>,
    private tokenService: TokenService,
    private notificationService: NotificationService
  ) { }


  /**
   * Validate user credentials against data in database
   */
  async login(param: UserLoginReq) {
    const user = await this.UserModel.findOne({ email: param.email });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isValid = await comparePassword(param.password, user.password);

    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = await this.tokenService.createAccessToken([Role.User]);
    const refreshToken = await this.tokenService.createRefreshToken([
      Role.User,
    ]);

    await this.notificationService.createNotification('account-created', user._id.toString(), { displayName: user.displayName });
    console.log("done")
    return {
      id: user._id.toString(),
      email: user.email,
      displayName: user.displayName,
      accessToken,
      refreshToken,
    };
  }

  /**
   * Add a new user to database
   */
  async register(param: UserRegisterReq) {
    const password = await hashPassword(param.password);
    const user = new this.UserModel({
      displayName: param.displayName,
      email: param.email,
      password,
    });

    try {
      await user.save();
    } catch (error) {
      Logger.error(
        'Error occurred while saving user',
        error instanceof Error ? error.message : ''
      );

      throw new InternalServerErrorException('Could not save user in database');
    }

    const accessToken = await this.tokenService.createAccessToken([Role.User]);
    const refreshToken = await this.tokenService.createRefreshToken([
      Role.User,
    ]);

    return {
      id: user._id.toString(),
      displayName: param.displayName,
      email: param.email,
      accessToken,
      refreshToken,
    };
  }

  /**
   * Issue new access token for valid refresh tokens
   * @param refreshToken
   * @returns
   */
  async tokenRefresh(refreshToken: string) {
    const roles = await this.tokenService.validateRefreshToken(refreshToken);

    // reject if refresh token is invalid
    if (!roles) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    // recreate access token
    const accessToken = await this.tokenService.createAccessToken(
      roles as Role[]
    );

    return accessToken;
  }
}
