import { CreateEmployeeDto } from '@hospe/types';
import { instance } from './axios';

const CreateDoctor = (props: CreateEmployeeDto) => {
  return instance.post('/employee/doctor', props).then((res) => res.data);
};

const GetAll = () => {
  return instance.get('/employee').then((res) => res.data);
};

export const Employee = {
  CreateDoctor,
  GetAll,
};
