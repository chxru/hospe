import { instance } from './axios';

interface CreateDoctorProps {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  birthday: Date;
  phone: string;
  specialization: string;
  qualification: string;
}

const CreateDoctor = (props: CreateDoctorProps) => {
  return instance.post('/employee/doctor', props).then((res) => res.data);
};

const GetAll = () => {
  return instance.get('/employee').then((res) => res.data);
};

export const Employee = {
  CreateDoctor,
  GetAll,
};
