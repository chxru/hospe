export class CreateEmployeeDto {
  readonly name: string;
  readonly email: string;
  readonly phone: number;
  readonly gender: 'male' | 'female' | 'other';
  readonly age: number;
  readonly birthday: Date;
  readonly specilaization: string;
  readonly qulification: string;
}
