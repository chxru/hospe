export interface Patient {
  name: string;
  email: string;
  phone: number;
  gender: 'male' | 'female' | 'other';
  age: number;
  birthday: Date;
  medical_history: string;
  medical_note: string;
}
