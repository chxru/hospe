import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';

import { ChannelingService } from './channeling.service';

import { Channeling } from './interfaces/channeling.interface';
import { CreateChannelingDto } from './dto/create-channeling.dto';

@Controller('channeling')
export class ChannelingController {
  constructor(private readonly channelingService: ChannelingService) {}

  // create channeling session
  @Post()
  create(
    @Body() createChannelingDto: CreateChannelingDto
  ): Promise<Channeling> {
    return this.channelingService.create(createChannelingDto);
  }

  // get channeling session by id
  @Get(':id')
  findOne(@Param('id') id): Promise<Channeling> {
    return this.channelingService.findOne(id);
  }

  // update channeling session
  @Put(':id')
  update(
    @Param('id') id,
    @Body() updateChannelingDto: CreateChannelingDto
  ): Promise<Channeling> {
    return this.channelingService.update(id, updateChannelingDto);
  }

  // find specific session by doctor
  @Post('/find')
  findSession() {
    return this.channelingService.findAll();
  }

  // // edit booking

  // // delete booking
  // @Delete(':id')
  // remove(@Param('id') id): Promise<Channeling> {
  //   return this.channelingService.remove(id);
  // }

  // // create channeling session
  // @Post('/create-session')
  // createSession(
  //   @Body() createChannelingSessionDto: CreateChannelingSessionDto
  // ): Promise<ChannelingSession> {
  //   return this.channelingService.createSession(createChannelingSessionDto);
  // }

  // // search channeling sessions under date range
  // @Get('/session/:channelingDate_from/:channelingDate_to')
  // findSessionByDate(
  //   @Param('channelingDate_from') channelingDate_From,
  //   @Param('channelingDate_to') channelingDate_To
  // ): Promise<ChannelingSession[]> {
  //   return this.channelingService.findSessionByDate(
  //     channelingDate_From,
  //     channelingDate_To
  //   );
  // }
}
