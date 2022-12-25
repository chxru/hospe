import { CreateUserDto } from '@hospe/types';

import { Register } from '../auth/auth.service';
import { SendEmail } from '../email/email.service';
import { UserModel } from './user.schema';

export const CreateUser = async (param: CreateUserDto) => {
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

    SendEmail({
      to: user.email,
      subject: 'Welcome to Hospe',
      html: `
        <h1>Welcome to Hospe</h1>
        <p>Thank you for registering with us. We hope you enjoy your stay.</p>
      `,
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
