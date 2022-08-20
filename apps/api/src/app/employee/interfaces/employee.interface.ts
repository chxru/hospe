export interface Employee {
  name: string;
  email: string;
  phone: number;
  gender: 'male' | 'female' | 'other';
  age: number;
  birthday: Date;
  specialization: string;
  qualification: string;
}
