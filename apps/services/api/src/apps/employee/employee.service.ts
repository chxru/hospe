import { CreateEmployeeDto, UpdateEmployeeDto } from '@hospe/types';
import { nanoid } from 'nanoid/async';
import { Register } from '../auth/auth.service';
import { SendEmail } from '../email/email.service';
import { EmployeeModel } from './employee.schema';

export const CreateEmployee = async (params: CreateEmployeeDto) => {
  const password = await nanoid();

  const employee = await EmployeeModel.create({
    email: params.email,
    gender: params.gender,
    displayName: params.firstName + ' ' + params.lastName,
    phone: params.phone,
    qualification: params.qualification,
    specialization: params.specialization,
  });

  try {
    await Register({
      password,
      role: 'doctor',
      userId: employee._id.toString(),
    });
  } catch (error) {
    await employee.delete();
  }

  SendEmail({
    to: params.email,
    subject: 'Welcome to Hospe',
    text: `Your password is ${password}`,
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

export const FindOneEmployeeByEmail = async (email: string) => {
  return await EmployeeModel.findOne({ email });
};

export const GetAllEmployees = async () => {
  const employees = await EmployeeModel.find().limit(100);
  return employees;
};

export const UpdateEmployee = async (id: string, params: UpdateEmployeeDto) => {
  return await EmployeeModel.findByIdAndUpdate(id, params, { upsert: true });
};

export const DeleteEmployee = async (id: string) => {
  return await EmployeeModel.findByIdAndRemove(id);
};
