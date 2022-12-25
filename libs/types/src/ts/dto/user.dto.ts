import { z } from 'zod';
import { zCreateUser } from '../../zod';

export type CreateUserDto = z.infer<typeof zCreateUser>['body'];
