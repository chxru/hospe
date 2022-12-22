import { UserRegisterReq } from '@hospe/types';
import { model } from 'mongoose';

import { Register } from '../auth/auth.service';
import { UserSchema } from './user.schema';

const UserModal = model('User', UserSchema);

export const CreateUser = async (param: UserRegisterReq) => {
  const user = new UserModal({
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
  const user = await UserModal.findById(id);
  return user;
};

export const GetUserByEmail = async (email: string) => {
  const user = await UserModal.findOne({ email });
  return user;
};
