import { Injectable } from '@nestjs/common';
import { CreateChannelingDto } from './dto/create-channeling.dto';
import { UpdateChannelingDto } from './dto/update-channeling.dto';

@Injectable()
export class ChannelingService {
  create(createChannelingDto: CreateChannelingDto) {
    return 'This action adds a new channeling';
  }

  findAll() {
    return `This action returns all channeling`;
  }

  findOne(id: number) {
    return `This action returns a #${id} channeling`;
  }

  update(id: number, updateChannelingDto: UpdateChannelingDto) {
    return `This action updates a #${id} channeling`;
  }

  remove(id: number) {
    return `This action removes a #${id} channeling`;
  }
}
