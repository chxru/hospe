import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ChannelingService } from './channeling.service';
import { Channeling } from './interfaces/channeling.interface';
import { ChannelingSession } from './interfaces/channelingSession.interface';
import { CreateChannelingDto } from './dto/create-channeling.dto';
import { CreateChannelingSessionDto } from './dto/create-channeling-session.dto';

@Controller('channeling')
export class ChannelingController {
  constructor(private readonly channelingService: ChannelingService) {}

  @Post()
  create(
    @Body() createChannelingDto: CreateChannelingDto
  ): Promise<Channeling> {
    return this.channelingService.create(createChannelingDto);
  }

  @Get()
  findAll(): Promise<Channeling[]> {
    return this.channelingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Channeling> {
    return this.channelingService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id,
    @Body() updateChannelingDto: CreateChannelingDto
  ): Promise<Channeling> {
    return this.channelingService.update(id, updateChannelingDto);
  }

  @Delete(':id')
  remove(@Param('id') id): Promise<Channeling> {
    return this.channelingService.remove(id);
  }

  // Doctor's view Session CRUD
  @Post('/session')
  createsession(
    @Body() createChannelingSessionDto: CreateChannelingSessionDto
  ): Promise<ChannelingSession> {
    return this.channelingService.createsession(createChannelingSessionDto);
  }

  @Get('/session/:channelingDate_from/:channelingDate_to')
  findSessionByDate(
    @Param('channelingDate_from') channelingDate_From,
    @Param('channelingDate_to') channelingDate_To
  ): Promise<ChannelingSession[]> {
    return this.channelingService.findSessionByDate(
      channelingDate_From,
      channelingDate_To
    );
  }
}
