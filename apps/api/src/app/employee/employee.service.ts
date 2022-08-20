import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid/async';

import { CreateEmployeeDto } from './dto/create-employee.dto';
import { hashPassword } from '../../services/bcrypt.service';
import { Employee } from './schema/employee.schema';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private readonly EmployeeModel: Model<Employee>
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const password = await nanoid();
    const hashed = await hashPassword(password);

    const employee = await this.EmployeeModel.create({
      ...createEmployeeDto,
      name: `${createEmployeeDto.firstName} ${createEmployeeDto.lastName}`,
      password: hashed,
    });

    return {
      email: employee.email,
      password,
    };
  }

  async findEmployeeByName(name): Promise<Employee[]> {
    return await this.EmployeeModel.find({ name: name });
  }

  async update(id, employee: CreateEmployeeDto) {
    return await this.EmployeeModel.findByIdAndUpdate(id, employee, {
      upsert: true,
    });
  }

  async remove(id: number) {
    return await this.EmployeeModel.findByIdAndRemove(id);
  }
}
