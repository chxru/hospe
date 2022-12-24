import { Center } from '@mantine/core';
import { AuthenticationForm } from '@hospe/ui';

import type { IAuthForm, Roles } from '@hospe/types';
import { Api, useAuthStore } from '@hospe/next';
import { showNotification } from '@mantine/notifications';
import { FunctionComponent } from 'react';

interface AuthScreenProps {
  enableRegister?: boolean;
  role: Roles;
}

export const AuthScreen: FunctionComponent<AuthScreenProps> = ({
  enableRegister,
  role,
}) => {
  const updateAuthState = useAuthStore((state) => state.onSignIn);

  const onSubmit = async (values: IAuthForm) => {
    try {
      const res = await Api.Auth.Login({
        email: values.email,
        password: values.password,
        role,
      });

      // update state
      updateAuthState(
        res.id,
        res.displayName,
        res.email,
        res.tokens.access.value
      );

      showNotification({
        title: 'Login Successful',
        message: 'Welcome back!',
        autoClose: true,
        color: 'teal',
      });
    } catch (error) {
      console.error(error);

      showNotification({
        title: 'Login Failed',
        message: 'Please check your credentials and try again.',
        autoClose: true,
        color: 'red',
      });
    }
  };

  return (
    <Center style={{ width: '100vw', height: '100vh', position: 'absolute' }}>
      <AuthenticationForm enableRegister={enableRegister} onSubmit={onSubmit} />
    </Center>
  );
};
