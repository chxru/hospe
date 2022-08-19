import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateChannelingDto } from './dto/create-channeling.dto';
import { Channeling } from './schema/channeling.schema';

@Injectable()
export class ChannelingService {
  constructor(
    @InjectModel(Channeling.name) private ChannelingModel: Model<Channeling>
  ) {}

  /** create channeling */
  async createChanneling(createChannelingDto: CreateChannelingDto) {
    return await this.ChannelingModel.create(createChannelingDto);
  }

  /** find specific channeling by Id*/
  async findOne(id) {
    return await this.ChannelingModel.findOne({ _id: id });
  }

  /** Edit Channeling */
  async update(id, channel: Channeling) {
    return await this.ChannelingModel.findByIdAndUpdate(id, channel, {
      new: true,
    });
  }

  async remove(id: number) {
    return await this.ChannelingModel.findByIdAndRemove(id);
  }

  //   // find session using date range
  //   async findSessionByDate(
  //     channelingDate_from,
  //     channelingDate_to
  //   ): Promise<ChannelingSession[]> {
  //     return await this.ChannelingSessionModel.find({
  //       channelingDate: { $gte: channelingDate_from, $lte: channelingDate_to },
  //     });
  //   }
}
