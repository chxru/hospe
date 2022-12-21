import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid/async';

import { CreatePatientDto } from './dto/create-patient.dto';
import { hashPassword } from '../../services/bcrypt.service';
import { Patient } from './schema/patient.schema';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient.name) private readonly PatientModel: Model<Patient>
  ) {}

  async create(createPatientDto: CreatePatientDto) {
    const password = await nanoid();
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

  async findEmployeeByName(name): Promise<Patient[]> {
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
}
