import { z } from 'zod';
import { zRoles } from '../zod';

export type Roles = z.infer<typeof zRoles>;
