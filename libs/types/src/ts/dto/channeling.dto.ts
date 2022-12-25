import { z } from 'zod';
import { zCreateChanneling } from '../../zod';

export type CreateChannelingDto = z.infer<typeof zCreateChanneling>['body'];
export type UpdateChannelingDto = Partial<CreateChannelingDto>;
