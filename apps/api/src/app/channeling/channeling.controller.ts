import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ChannelingService } from './channeling.service';
import { CreateChannelingDto } from './dto/create-channeling.dto';

@Controller('channeling')
export class ChannelingController {
  constructor(private readonly channelingService: ChannelingService) {}

  /**  create channeling session */
  @Post('/create-channeling')
  createSession(@Body() createChannelingSessionDto: CreateChannelingDto) {
    return this.channelingService.createChanneling(createChannelingSessionDto);
  }

  /** Get channeling by id */
  @Get(':id')
  findOne(@Param('id') id) {
    return this.channelingService.findOne(id);
  }

  /** edit channeling */
  @Put('/edit-channeling/:id')
  update(
    @Param('id') id,
    @Body() updateChannelingSessionDto: CreateChannelingDto
  ) {
    return this.channelingService.update(id, updateChannelingSessionDto);
  }

  /** delete channeling */
  @Delete(':id')
  remove(@Param('id') id) {
    return this.channelingService.remove(id);
  }

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
