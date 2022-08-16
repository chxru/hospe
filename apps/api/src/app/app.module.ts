import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ChannelingModule } from './channeling/channeling.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    AuthModule,
    ChannelingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
