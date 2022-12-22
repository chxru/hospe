import { model } from 'mongoose';
import type { UserLoginReq, UserRegisterReq } from '@hospe/types';

import { AuthSchema } from './auth.schema';
import { ComparePassword, HashPassword } from './helpers/bcrypt';

import { NotFoundError, UnauthorizedException } from '../../errors';
import {
  CreateAccessToken,
  CreateRefreshToken,
  ValidateRefreshToken,
} from './helpers/tokens';

const AuthModal = model('Auth', AuthSchema);

/**
 * Validate user credentials against data in database
 */
export const Login = async (param: UserLoginReq) => {
  const user = await AuthModal.findOne({ email: param.email });

  if (!user) {
    throw new NotFoundError('User');
  }

  const isValid = await ComparePassword(param.password, user.password);

  if (!isValid) {
    throw new UnauthorizedException('Invalid credentials');
  }

  const accessToken = await CreateAccessToken(user._id.toString(), 'user');
  const refreshToken = await CreateRefreshToken(['user']);

  return {
    id: user._id.toString(),
    email: user.email,
    displayName: user.displayName,
    accessToken,
    refreshToken,
  };
};

/**
 * Add a new user to database
 */
export const Register = async (param: UserRegisterReq) => {
  const password = await HashPassword(param.password);
  const user = new AuthModal({
    displayName: param.displayName,
    email: param.email,
    password,
  });

  await user.save();

  const accessToken = await CreateAccessToken(user._id.toString(), 'user');
  const refreshToken = await CreateRefreshToken(['user']);

  return {
    id: user._id.toString(),
    email: user.email,
    displayName: user.displayName,
    accessToken,
    refreshToken,
  };
};

/**
 * Issue new access token for valid refresh tokens
 * @param refreshToken
 * @returns
 */
export const TokenRefresh = async (refreshToken: string) => {
  const roles = await ValidateRefreshToken(refreshToken);

  // reject if refresh token is invalid
  if (!roles) {
    throw new UnauthorizedException('Invalid refresh token');
  }

  // TODO:
  const accessToken = await CreateAccessToken('TODO', 'user');
  return accessToken;
};
