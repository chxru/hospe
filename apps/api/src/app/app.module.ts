import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChannelingModule } from './channeling/channeling.module';
import { env } from 'process';

@Module({
  imports: [ChannelingModule, MongooseModule.forRoot(env.MONGO_URL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
