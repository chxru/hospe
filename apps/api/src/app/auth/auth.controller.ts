import {
  UserLoginReq,
  UserLoginRes,
  UserRegisterReq,
  UserTokenRefreshReq,
} from '@hospe/types';
import { Controller, Post, Body } from '@nestjs/common';

import { AuthService } from './auth.service';
import {
  ACCESS_TOKEN_EXPIRATION,
  REFRESH_TOKEN_EXPIRATION,
} from './token/token.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() param: UserLoginReq): Promise<UserLoginRes> {
    const data = await this.authService.login(param);

    return {
      displayName: data.displayName,
      email: data.email,
      id: data.id,
      tokens: {
        access: {
          expires: ACCESS_TOKEN_EXPIRATION,
          value: data.accessToken,
        },
        refresh: {
          expires: REFRESH_TOKEN_EXPIRATION,
          value: data.refreshToken,
        },
      },
    };
  }

  @Post('/register')
  register(@Body() param: UserRegisterReq) {
    return this.authService.register(param);
  }

  @Post('/token')
  refresh(@Body() param: UserTokenRefreshReq) {
    return this.authService.tokenRefresh(param.refreshToken);
  }
}
