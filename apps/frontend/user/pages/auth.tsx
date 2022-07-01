import { Center } from '@mantine/core';
import { AuthenticationForm } from '@hospe/ui';

const AuthPage = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Center>
      <AuthenticationForm onSubmit={onSubmit} />
    </Center>
  );
};

export default AuthPage;
