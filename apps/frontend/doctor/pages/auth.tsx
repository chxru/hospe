import { Api, useAuthStore } from '@hospe/next';
import { IAuthForm } from '@hospe/types';
import { AuthenticationForm } from '@hospe/ui';
import { Center } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useEffect, useState } from 'react';

const AuthPage = () => {
  const [token, setToken] = useState('');
  const updateAuthState = useAuthStore((state) => state.onSignIn);

  useEffect(() => {
    const href = window.location.href.split('/');
    setToken(href[href.length - 1].split('?')[1]);
  }, []);

  const onSubmit = async (values: IAuthForm) => {
    try {
      const res = await Api.Auth.MagicLink({ ...values, token });
      updateAuthState(
        res.id,
        res.displayName,
        res.email,
        res.tokens.access.value
      );

      showNotification({
        title: 'Login Successful',
        message: 'Welcome to hospe!',
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
    <>
      <Center
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          flexDirection: 'column',
        }}
      >
        <AuthenticationForm hideSocialLogin={true} onSubmit={onSubmit} />
      </Center>
    </>
  );
};

export default AuthPage;
