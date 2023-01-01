import { CreateChannelingDto } from '../dto';

export interface ICreateSessionForm
  extends Omit<CreateChannelingDto, 'date' | 'time'> {
  date: Date;
  time: Date;
}
