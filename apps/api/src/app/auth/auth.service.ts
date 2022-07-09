import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateAuthDto } from './dto/create-auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Auth } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(@InjectModel('Auth') private readonly authModel: Model<Auth>) {}

  async findAll(): Promise<Auth[]> {
    return await this.authModel.find();
  }

  async findOneByEmail(email: string): Promise<Auth> {
    return await this.authModel.findOne({ email });
  }

  async create(createAuthDto: CreateAuthDto): Promise<Auth> {
    const createdAuth = new this.authModel(createAuthDto);
    return await createdAuth.save();
  }
}
