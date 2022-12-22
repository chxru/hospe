import { model } from 'mongoose';
import { nanoid } from 'nanoid/async';
import { CreateEmployeeDto, UpdateEmployeeDto } from './employee.dto';
import { EmployeeSchema } from './employee.schema';
import { HashPassword } from '../auth/helpers/bcrypt';

const EmployeeModel = model('Employee', EmployeeSchema);

export const CreateEmployee = async (params: CreateEmployeeDto) => {
  const password = await nanoid();

  // TODO: centralized auth service
  const hashed = await HashPassword(password);

  const employee = await EmployeeModel.create({
    ...params,
    name: `${params.firstName} ${params.lastName}`,
    password: hashed,
  });

  return {
    email: employee.email,
    password,
  };
};

export const FindOneEmployee = async (id: string) => {
  return await EmployeeModel.findById(id);
};

export const FindOneEmployeeByName = async (name: string) => {
  return await EmployeeModel.find({
    name,
  });
};

export const UpdateEmployee = async (id: string, params: UpdateEmployeeDto) => {
  return await EmployeeModel.findByIdAndUpdate(id, params, { upsert: true });
};

export const DeleteEmployee = async (id: string) => {
  return await EmployeeModel.findByIdAndRemove(id);
};
