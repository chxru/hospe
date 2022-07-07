import { Injectable } from '@nestjs/common';
import { Channeling } from './interfaces/channeling.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateChannelingDto } from './dto/create-channeling.dto';

@Injectable()
export class ChannelingService {
  constructor(@InjectModel('Channeling') private readonly channelingModel: Model<Channeling>) { }

  async create(createChannelingDto: CreateChannelingDto): Promise<Channeling> {
    return await this.channelingModel.create(createChannelingDto);
  }

  async findAll(): Promise<Channeling[]> {
    return await this.channelingModel.find();
  }

  async findOne(id): Promise<Channeling> {
    return await this.channelingModel.findOne({ _id: id });
  }

  async update(id, channeling: Channeling) {
    return await this.channelingModel.findByIdAndUpdate(id, channeling, { new: true });
  }

  async remove(id) {
    return await this.channelingModel.findByIdAndRemove(id);
  }
}
