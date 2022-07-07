import { Module } from '@nestjs/common';
import { ChannelingService } from './channeling.service';
import { ChannelingController } from './channeling.controller';

@Module({
  controllers: [ChannelingController],
  providers: [ChannelingService],
})
export class ChannelingModule {}
