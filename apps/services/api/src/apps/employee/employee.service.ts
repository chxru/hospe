import { CreateEmployeeDto, UpdateEmployeeDto } from '@hospe/types';
import { nanoid } from 'nanoid/async';
import { MagicLinkModel } from '../auth/auth.schema';
import { Register } from '../auth/auth.service';
import { SendEmail } from '../email/email.service';
import { EmployeeModel } from './employee.schema';

export const CreateEmployee = async (params: CreateEmployeeDto) => {
  const password = await nanoid();
  const magicPwd = await nanoid(16);

  const employee = await EmployeeModel.create({
    email: params.email,
    gender: params.gender,
    displayName: params.firstName + ' ' + params.lastName,
    phone: params.phone,
    qualification: params.qualification,
    specialization: params.specialization,
  });

  await MagicLinkModel.create({
    email: params.email,
    token: magicPwd,
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24), // expires in 24 hours
    isUsed: false,
    userId: employee._id.toString(),
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

  const frontend = process.env.DOCTOR_URL || 'http://localhost:4201';

  console.log('Magic Link for user ', params.email, ' is ', magicPwd);

  SendEmail({
    to: params.email,
    subject: 'Welcome to Hospe',
    html: `
      <h1>Welcome to Hospe</h1>
      <p>Click the link below to set your password</p>
      <a href="${frontend}/auth?${magicPwd}">Set Password</a>
    `,
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
