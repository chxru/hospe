import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChannelingModule } from './channeling/channeling.module';
import { env } from 'process';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(env.MONGO_URL),
    AuthModule,
    ChannelingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
