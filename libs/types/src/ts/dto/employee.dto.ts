import { z } from 'zod';
import { zCreateEmployee } from '../../zod';

export type CreateEmployeeDto = z.infer<typeof zCreateEmployee>['body'];
export type UpdateEmployeeDto = Partial<CreateEmployeeDto>;
