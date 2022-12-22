import type { IDoctorCreate } from '@hospe/types';

export type CreateEmployeeDto = IDoctorCreate;
export type UpdateEmployeeDto = Partial<CreateEmployeeDto>;
