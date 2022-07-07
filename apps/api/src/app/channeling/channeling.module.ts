import { Module } from '@nestjs/common';
import { ChannelingService } from './channeling.service';
import { ChannelingController } from './channeling.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChannelingEntity } from './entities/channeling.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Channeling', schema: ChannelingEntity }])],
  controllers: [ChannelingController],
  providers: [ChannelingService],
})
export class ChannelingModule { }
