import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './interfaces/employee.interface';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel('Employee') private readonly employeeModel: Model<Employee>
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    return await this.employeeModel.create(createEmployeeDto);
  }

  async findEmployeeByname(name): Promise<Employee[]> {
    return await this.employeeModel.find({ name: name });
  }

  async update(id, employee: Employee) {
    return await this.employeeModel.findByIdAndUpdate(id, employee, {
      new: true,
    });
  }

  async remove(id: number) {
    return await this.employeeModel.findByIdAndRemove(id);
  }
}
