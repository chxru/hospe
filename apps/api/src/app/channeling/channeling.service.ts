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
  ) { }

  // book a channeling session
  async create(createChannelingDto: CreateChannelingDto): Promise<Channeling> {
    return await this.channelingModel.create(createChannelingDto);
  }

  // display all channeling sessions
  async findAll(): Promise<Channeling[]> {
    return await this.channelingModel.find();
  }

  // find specific session by doctor
  async findOne(id): Promise<Channeling> {
    return await this.channelingModel.findOne({ _id: id });
  }

  // edit booking - channel status pending/ finished
  async update(id, channeling: Channeling) {
    return await this.channelingModel.findByIdAndUpdate(id, channeling, {
      new: true,
    });
  }

  // remove booking
  async remove(id) {
    return await this.channelingModel.findByIdAndRemove(id);
  }

  // create session
  async createsession(createChannelingSessionDto: CreateChannelingSessionDto) {
    return await this.ChannelingSessionModel.create(createChannelingSessionDto);
  }

  // find session using date range
  async findSessionByDate(
    channelingDate_from,
    channelingDate_to
  ): Promise<ChannelingSession[]> {
    return await this.ChannelingSessionModel.find({
      channelingDate: { $gte: channelingDate_from, $lte: channelingDate_to },
    });
  }
}
