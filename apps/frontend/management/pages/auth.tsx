import { useRouter } from 'next/router';
import { Center } from '@mantine/core';
import { AuthenticationForm } from '@hospe/ui';

import type { IAuthForm } from '@hospe/types';
import { Api, useAuthStore } from '@hospe/next';

const AuthPage = () => {
  const router = useRouter();
  const updateAuthState = useAuthStore((state) => state.onSignIn);

  const onSubmit = async (values: IAuthForm) => {
    try {
      const res = await Api.Auth.Login({
        email: values.email,
        password: values.password,
      });

      // update state
      updateAuthState(
        res.id,
        res.displayName,
        res.email,
        res.tokens.access.value
      );

      // redirect to home page
      router.push('/');
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

export default AuthPage;
