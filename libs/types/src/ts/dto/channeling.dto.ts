import { z } from 'zod';
import { zCreateChanneling } from '../../zod';

export type CreateChannelingDto = z.infer<typeof zCreateChanneling>['body'];
export type UpdateChannelingDto = Partial<CreateChannelingDto>;
export type GetChannelsByTypeDto = {
  _id: string;
  date: string;
  time: string;
  maxPatient: number;
  fee: number;
  docId: string;
  docType: string;
  docName: string;
};
