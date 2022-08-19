import { CacheModule, Module } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import * as redisStore from 'cache-manager-redis-store';
import { ClientOpts } from 'redis';

import { RoleGuard } from './auth/rbac/role.guard';
import {
  RefreshToken,
  RefreshTokenSchema,
} from './auth/token/schema/token.schema';

import { AuthModule } from './auth/auth.module';
import { BookingModule } from './booking/booking.module';
import { ChannelingModule } from './channeling/channeling.module';
import { EmployeeModule } from './employee/employee.module';
import { TokenService } from './auth/token/token.service';
import { ReqUserInterceptor } from '../interceptors/user.interceptor';

@Module({
  imports: [
    CacheModule.register<ClientOpts>({
      store: redisStore,
      host: process.env.REDIS_URL,
      port: Number(process.env.REDIS_PORT),
      auth_pass: process.env.REDIS_AUTH_PASS,
    }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    MongooseModule.forFeature([
      { name: RefreshToken.name, schema: RefreshTokenSchema },
    ]),
    AuthModule,
    ChannelingModule,
    channelingSessions
    BookingModule,

    EmployeeModule,
  ],
  controllers: [],
  providers: [
    TokenService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ReqUserInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
