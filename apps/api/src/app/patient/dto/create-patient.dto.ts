import { IPatientCreate } from '@hospe/types';

export class CreatePatientDto implements IPatientCreate {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone: string;
  readonly gender: 'male' | 'female' | 'other';
  readonly age: number;
  readonly birthday: Date;
  readonly specialization: string;
  readonly qualification: string;
}
