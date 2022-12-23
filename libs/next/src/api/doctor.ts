import { ISessionForm } from '@hospe/types';
import { instance } from './axios';

interface CreateSessionProps {
  docId: string;
  docName: string;
  date: string;
  time: string;
  maximumPatients: number;
  doctorFee: number;
}

const CreateSession = (props: CreateSessionProps) => {
  return instance
    .post('/channeling/create-channeling', props)
    .then((res) => res.data);
};

const GetAll = () => {
  return instance.get('/channeling/').then((res) => res.data);
};

const Delete = (props: string) => {
  return instance.delete(`/channeling/${props}`).then((res) => res.data);
};

export const Doctor = {
  CreateSession,
  GetAll,
  Delete,
};
