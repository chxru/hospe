import { compare, hash } from 'bcrypt';

/**
 * Hash a password using bcrypt
 * @param password Raw password
 */
export const HashPassword = async (password: string) => {
  const hashed = await hash(password, 10);
  return hashed;
};

/**
 * Compare a password with a hashed password
 * @param password Raw password
 * @param hashed Hashed password
 */
export const ComparePassword = async (password: string, hashed: string) =>
  await compare(password, hashed);
