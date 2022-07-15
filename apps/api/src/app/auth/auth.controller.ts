import { UserLoginReq, UserRegisterReq } from '@hospe/types';
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body() param: UserLoginReq) {
    return this.authService.login(param);
  }

  @Post('/register')
  register(@Body() param: UserRegisterReq) {
    return this.authService.register(param);
  }
}
