import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid/async';

import { CreatePatientDto } from './dto/create-patient.dto';
import { hashPassword } from '../../services/bcrypt.service';
import { Patient } from './schema/patient.schema';
import * as crypto from 'crypto';
@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient.name) private readonly PatientModel: Model<Patient>
  ) {}

  async create(createPatientDto: CreatePatientDto) {
    const password = await this.generatePassword();
    const hashed = await hashPassword(password);

    const patient = await this.PatientModel.create({
      ...createPatientDto,
      name: `${createPatientDto.firstName} ${createPatientDto.lastName}`,
      password: hashed,
    });

    return {
      email: patient.email,
      password,
    };
  }

  async findPatientByName(name): Promise<Patient[]> {
    return await this.PatientModel.find({ name: name });
  }

  async update(id, patient: CreatePatientDto) {
    return await this.PatientModel.findByIdAndUpdate(id, patient, {
      upsert: true,
    });
  }

  async remove(id: number) {
    return await this.PatientModel.findByIdAndRemove(id);
  }

  generatePassword(): string {
    const passwordLength = 8;
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomNumber = crypto.randomBytes(1)[0] % charset.length;
      password += charset[randomNumber];
    }
    return password;
  }
}
