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
  constructor(private readonly channelingService: ChannelingService) { }

  // book a channeling session
  @Post()
  create(
    @Body() createChannelingDto: CreateChannelingDto
  ): Promise<Channeling> {
    return this.channelingService.create(createChannelingDto);
  }

  // display all channeling sessions
  @Get()
  findAll(): Promise<Channeling[]> {
    return this.channelingService.findAll();
  }

  // find specific session by doctor
  @Get(':id')
  findOne(@Param('id') id): Promise<Channeling> {
    return this.channelingService.findOne(id);
  }

  // edit booking
  @Put(':id')
  update(
    @Param('id') id,
    @Body() updateChannelingDto: CreateChannelingDto
  ): Promise<Channeling> {
    return this.channelingService.update(id, updateChannelingDto);
  }

  // delete booking
  @Delete(':id')
  remove(@Param('id') id): Promise<Channeling> {
    return this.channelingService.remove(id);
  }

  // create channeling session
  @Post('/create-session')
  createsession(
    @Body() createChannelingSessionDto: CreateChannelingSessionDto
  ): Promise<ChannelingSession> {
    return this.channelingService.createsession(createChannelingSessionDto);
  }

  // search channeling sessions under date range
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
