import { Injectable } from '@nestjs/common';
import { Channeling } from './interfaces/channeling.interface';
import { ChannelingSession } from './interfaces/channelingSession.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateChannelingDto } from './dto/create-channeling.dto';
import { CreateChannelingSessionDto } from './dto/create-channeling-session.dto';

@Injectable()
export class ChannelingService {
  constructor(
    @InjectModel('Channeling')
    private readonly channelingModel: Model<Channeling>,

    @InjectModel('ChannelingSession')
    private readonly ChannelingSessionModel: Model<ChannelingSession>
  ) {}

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
    return await this.channelingModel.findByIdAndUpdate(id, channeling, {
      new: true,
    });
  }

  async remove(id) {
    return await this.channelingModel.findByIdAndRemove(id);
  }

  //Doctor's View Sessoin CRUD

  async createsession(createChannelingSessionDto: CreateChannelingSessionDto) {
    return await this.ChannelingSessionModel.create(createChannelingSessionDto);
  }

  async findSessionByDate(
    channelingDate_from,
    channelingDate_to
  ): Promise<ChannelingSession[]> {
    return await this.ChannelingSessionModel.find({
      channelingDate: { $gte: channelingDate_from, $lte: channelingDate_to },
    });
  }
}
