import { useRouter } from 'next/router';
import { getCsrfToken, signIn } from 'next-auth/react';
import { Center } from '@mantine/core';
import { AuthenticationForm } from '@hospe/ui';

const AuthPage = () => {
  const router = useRouter();

  const onSubmit = async (values) => {
    const res = await signIn<'credentials'>('credentials', {
      username: values.email,
      password: values.password,
      redirect: false,
    });

    if (res.ok) {
      router.push('/');
    } else {
      console.error(res.error);
    }
  };

  return (
    <Center>
      <AuthenticationForm onSubmit={onSubmit} />
    </Center>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}

export default AuthPage;
