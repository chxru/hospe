import {
  CACHE_MANAGER,
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Cache } from 'cache-manager';

import { RedisPayload } from '../app/auth/token/interface/redis.interface';

@Injectable()
export class ReqUserInterceptor implements NestInterceptor {
  constructor(@Inject(CACHE_MANAGER) private readonly authRedis: Cache) {}

  async intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers?.authorization;

    // if no authorization header, skip adding req.user
    if (!authorization) {
      return next.handle();
    }

    const token = authorization?.split(' ')[1];
    const payload = await this.authRedis.get<RedisPayload>(`access:${token}`);
    request.user = payload;
    return next.handle();
  }
}
