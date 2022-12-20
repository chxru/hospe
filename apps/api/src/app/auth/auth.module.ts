import { CacheModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import type { ClientOpts } from 'redis';

import * as redisStore from 'cache-manager-redis-store';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TokenService } from './token/token.service';

import { User, UserSchema } from '../../schemas/user.schema';
import { RefreshToken, RefreshTokenSchema } from './token/schema/token.schema';

@Module({
  imports: [
    CacheModule.register<ClientOpts>({
      store: redisStore,
      host: process.env.REDIS_URL,
      port: Number(process.env.REDIS_PORT),
    }),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: RefreshToken.name, schema: RefreshTokenSchema },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, TokenService],
})
export class AuthModule {}
