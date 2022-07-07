import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChannelingService } from './channeling.service';
import { CreateChannelingDto } from './dto/create-channeling.dto';
import { UpdateChannelingDto } from './dto/update-channeling.dto';

@Controller('channeling')
export class ChannelingController {
  constructor(private readonly channelingService: ChannelingService) {}

  @Post()
  create(@Body() createChannelingDto: CreateChannelingDto) {
    return this.channelingService.create(createChannelingDto);
  }

  @Get()
  findAll() {
    return this.channelingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.channelingService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChannelingDto: UpdateChannelingDto
  ) {
    return this.channelingService.update(+id, updateChannelingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.channelingService.remove(+id);
  }
}
