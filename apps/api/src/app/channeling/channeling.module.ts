import { Module } from '@nestjs/common';
import { ChannelingService } from './channeling.service';
import { ChannelingController } from './channeling.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { Channeling, ChannelingSchema } from './schema/channeling.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Channeling.name, schema: ChannelingSchema },
    ]),
  ],
  controllers: [ChannelingController],
  providers: [ChannelingService],
})
export class ChannelingModule {}
