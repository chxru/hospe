import React, { useState } from 'react';
import { useForm } from '@mantine/hooks';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Center,
} from '@mantine/core';
import { GoogleButton, FacebookButton } from './icons/';

import type { IAuthForm } from '@hospe/types';
interface AuthenticationFormProps {
  enableRegister?: boolean;
  hideSocialLogin?: boolean;
  onSubmit: (values: IAuthForm) => void;
}

export const AuthenticationForm: React.FC<AuthenticationFormProps> = ({
  enableRegister,
  hideSocialLogin,
  onSubmit,
}) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const form = useForm<IAuthForm>({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
      isLogin,
    },

    validationRules: {
      email: (val) => /^\S+@\S+$/.test(val),
      password: (val) => val.length >= 6,
    },
  });

  return (
    <Paper radius="md" p="xl" withBorder>
      <Text size="lg" weight={500}>
        Welcome to Hospe, {isLogin ? 'login' : 'register'} with
      </Text>

      {!hideSocialLogin && (
        <>
          <Group grow mb="md" mt="md">
            <GoogleButton radius="xl">Google</GoogleButton>
            <FacebookButton radius="xl">Facebook</FacebookButton>
          </Group>

          <Divider
            label="Or continue with email"
            labelPosition="center"
            my="lg"
          />
        </>
      )}

      <form onSubmit={form.onSubmit(onSubmit)}>
        <Group direction="column" grow>
          {!isLogin && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) =>
                form.setFieldValue('name', event.currentTarget.value)
              }
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue('email', event.currentTarget.value)
            }
            error={form.errors.email && 'Invalid email'}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue('password', event.currentTarget.value)
            }
            error={
              form.errors.password &&
              'Password should include at least 6 characters'
            }
          />

          {!isLogin && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue('terms', event.currentTarget.checked)
              }
            />
          )}
        </Group>

        <Center>
          <Button type="submit" mt={8}>
            {isLogin ? 'Login' : 'Register'}
          </Button>
        </Center>

        {enableRegister && (
          <Center>
            <Group position="apart" mt="xl">
              <Anchor
                component="button"
                type="button"
                color="gray"
                onClick={() => {
                  setIsLogin((value) => {
                    form.setFieldValue('isLogin', !value);
                    return !value;
                  });
                }}
                size="xs"
              >
                {!isLogin
                  ? 'Already have an account? Login'
                  : "Don't have an account? Register"}
              </Anchor>
            </Group>
          </Center>
        )}
      </form>
    </Paper>
  );
};
