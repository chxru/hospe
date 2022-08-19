import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { TokenService } from '../token/token.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private tokenService: TokenService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler()
    );

    // if no roles are required, allow access
    if (!requiredRoles) {
      return true;
    }

    const authorization = context.switchToHttp().getRequest()
      .headers?.authorization;

    const token = authorization?.split(' ')[1];
    const payload = await this.tokenService.validateAccessToken(token);

    // payload not available in redis, deny access
    if (!payload) return false;

    const { role } = payload;

    if (requiredRoles.includes(role)) {
      return true;
    }
  }
}
