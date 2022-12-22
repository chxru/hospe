import { UserRegisterReq } from '@hospe/types';

import { Register } from '../auth/auth.service';
import { UserModel } from './user.schema';

export const CreateUser = async (param: UserRegisterReq) => {
  const user = new UserModel({
    displayName: param.displayName,
    email: param.email,
  });

  await user.save();

  try {
    const data = await Register({
      userId: user._id.toString(),
      role: 'user',
      password: param.password,
    });

    return {
      id: user._id.toString(),
      email: user.email,
      displayName: user.displayName,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    };
  } catch (error) {
    await user.remove();
    throw error;
  }
};

export const GetUser = async (id: string) => {
  const user = await UserModel.findById(id);
  return user;
};

export const GetUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email });
  return user;
};
