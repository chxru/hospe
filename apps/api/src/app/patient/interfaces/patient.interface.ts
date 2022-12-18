export interface Patient {
  name: string;
  email: string;
  phone: number;
  gender: 'male' | 'female' | 'other';
  age: number;
  birthday: Date;
  medicalhistory: string;
  medicalnote: string;
}
