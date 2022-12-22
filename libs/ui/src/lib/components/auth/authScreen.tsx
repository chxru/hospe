import { Center } from '@mantine/core';
import { AuthenticationForm } from '@hospe/ui';

import type { IAuthForm, Roles } from '@hospe/types';
import { Api, useAuthStore } from '@hospe/next';
import { FunctionComponent } from 'react';

interface AuthScreenProps {
  role: Roles;
}

export const AuthScreen: FunctionComponent<AuthScreenProps> = ({ role }) => {
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Center style={{ width: '100vw', height: '100vh', position: 'absolute' }}>
      <AuthenticationForm onSubmit={onSubmit} />
    </Center>
  );
};
