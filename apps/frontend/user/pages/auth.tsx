import { Center } from '@mantine/core';
import { AuthenticationForm } from '@hospe/ui';

const AuthPage = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Center style={{ width: '100vw', height: '100vh' }}>
      <AuthenticationForm onSubmit={onSubmit} />
    </Center>
  );
};

export default AuthPage;
