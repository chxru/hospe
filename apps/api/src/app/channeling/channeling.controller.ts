import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ChannelingService } from './channeling.service';
import { Channeling } from './interfaces/channeling.interface';
import { CreateChannelingDto } from './dto/create-channeling.dto';

@Controller('channeling')
export class ChannelingController {
  constructor(private readonly channelingService: ChannelingService) { }

  @Post()
  create(@Body() createChannelingDto: CreateChannelingDto): Promise<Channeling> {
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
  update(@Param('id') id, @Body() updateChannelingDto: CreateChannelingDto): Promise<Channeling> {
    return this.channelingService.update(id, updateChannelingDto);
  }

  @Delete(':id')
  remove(@Param('id') id): Promise<Channeling> {
    return this.channelingService.remove(id);
  }
}
