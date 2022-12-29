import type {
  VerifyEmployeeMagicReq,
  Roles,
  TokenRefreshRes,
  UserLoginReq,
} from '@hospe/types';

import { AuthModel, MagicLinkModel } from './auth.schema';
import { ComparePassword, HashPassword } from './helpers/bcrypt';

import { NotFoundError, UnauthorizedException } from '../../errors';
import {
  ACCESS_TOKEN_EXPIRATION,
  CreateAccessToken,
  CreateRefreshToken,
  REFRESH_TOKEN_EXPIRATION,
  ValidateRefreshToken,
} from './helpers/tokens';
import { GetUser, GetUserByEmail } from '../user/user.service';
import {
  FindOneEmployee,
  FindOneEmployeeByEmail,
} from '../employee/employee.service';

/**
 * Validate user credentials against data in database
 */
export const Login = async (param: UserLoginReq) => {
  let user;
  if (param.role == 'user') {
    user = await GetUserByEmail(param.email);
  } else if (param.role == 'doctor') {
    user = await FindOneEmployeeByEmail(param.email);
  } else {
    throw new Error('Invalid role');
  }

  if (!user) {
    throw new NotFoundError('User');
  }

  const auth = await AuthModel.findOne({
    userId: user._id.toString(),
    role: param.role,
  });

  if (!auth) {
    throw new NotFoundError(param.role);
  }

  const isValid = await ComparePassword(param.password, auth.password);

  if (!isValid) {
    throw new UnauthorizedException('Invalid credentials');
  }

  const accessToken = await CreateAccessToken(user._id.toString(), param.role);
  const refreshToken = await CreateRefreshToken(
    user._id.toString(),
    param.role
  );

  return {
    id: auth._id.toString(),
    email: user.email,
    displayName: user.displayName,
    tokens: {
      access: {
        expires: ACCESS_TOKEN_EXPIRATION,
        value: accessToken,
      },
      refresh: {
        expires: REFRESH_TOKEN_EXPIRATION,
        value: refreshToken,
      },
    },
  };
};

interface RegisterProps {
  userId: string;
  role: Roles;
  password: string;
}

/**
 * Add a new user to database
 */
export const Register = async (param: RegisterProps) => {
  const password = await HashPassword(param.password);
  const auth = new AuthModel({
    userId: param.userId,
    role: param.role,
    password,
  });

  await auth.save();

  const accessToken = await CreateAccessToken(param.userId, param.role);
  const refreshToken = await CreateRefreshToken(param.userId, param.role);

  return {
    id: auth._id.toString(),
    accessToken,
    refreshToken,
  };
};

/**
 * Issue new access token for valid refresh tokens
 * @param refreshToken
 * @returns
 */
export const TokenRefresh = async (
  refreshToken: string
): Promise<TokenRefreshRes> => {
  const res = await ValidateRefreshToken(refreshToken);

  if (!res) {
    throw new UnauthorizedException('Invalid refresh token');
  }

  const { role, userId } = res;

  let data;
  if (role == 'user') {
    data = await GetUser(userId);
  } else if (role == 'doctor') {
    data = await FindOneEmployee(userId);
  } else {
    throw new Error('Invalid role');
  }

  if (!data) {
    throw new NotFoundError('No valid user for token');
  }

  const accessToken = await CreateAccessToken(data._id.toString(), role);
  return {
    id: data._id.toString(),
    email: data.email,
    displayName: data.displayName || '',
    accessToken,
  };
};

export const ValidateMagicLink = async (props: VerifyEmployeeMagicReq) => {
  const magic = await MagicLinkModel.findOne({
    email: props.email,
    token: props.token,
    used: false,
  });

  if (!magic) {
    throw new NotFoundError('No valid email and token combination');
  }

  // update the user password
  const auth = await AuthModel.findOne({
    userId: magic.userId,
  });

  if (!auth) {
    throw new NotFoundError('No valid user for token');
  }

  auth.password = await HashPassword(props.password);
  await auth.save();

  const res = await Login({
    email: props.email,
    password: props.password,
    role: 'doctor',
  });

  magic.update({ used: true });
  await magic.save();

  return res;
};
