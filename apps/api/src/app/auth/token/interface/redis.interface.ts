import { Role } from '../../rbac/role.decorator';

export interface RedisPayload {
  id: string;
  role: Role;
}
