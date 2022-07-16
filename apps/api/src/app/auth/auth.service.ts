import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from '../../schemas/user.schema';
import { comparePassword, hashPassword } from '../../services/bcrypt.service';

import type {
  UserLoginReq,
  UserLoginRes,
  UserRegisterReq,
  UserRegisterRes,
} from '@hospe/types';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  /**
   * Validate user credentials against data in database
   */
  async login(param: UserLoginReq): Promise<UserLoginRes> {
    const user = await this.UserModel.findOne({ email: param.email });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isValid = await comparePassword(param.password, user.password);

    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      id: user._id.toString(),
      email: user.email,
      displayName: user.displayName,
    };
  }

  /**
   * Add a new user to database
   */
  async register(param: UserRegisterReq): Promise<UserRegisterRes> {
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

    return {
      id: user._id.toString(),
      displayName: param.displayName,
      email: param.email,
    };
  }
}
