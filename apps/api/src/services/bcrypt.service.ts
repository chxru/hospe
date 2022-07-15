import { compare, hash } from 'bcrypt';

export const hashPassword = async (password: string) => hash(password, 10);
export const comparePassword = async (password: string, hashed: string) =>
  compare(password, hashed);
