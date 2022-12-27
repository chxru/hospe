import { Api } from '@hospe/next';
import { Button, Paper, Stack, Text, TextInput } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useState } from 'react';

const SpecializationPage = () => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const onClick = async () => {
    if (value === '') {
      setError('This value should not be empty');
      return;
    }

    try {
      await Api.Booking.CreateSpecialization({
        value: value.trim().toLocaleLowerCase(),
        label: value.trim(),
      });

      showNotification({
        title: 'Success',
        message: 'Specialization Inserted',
        color: 'teal',
      });

      setError('');
      setValue('');
    } catch (error) {
      console.error(error);
      showNotification({
        title: 'Oops',
        message: 'Specialization Insertion failed',
        color: 'red',
      });

      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Unknown error occurred');
      }
    }
  };

  return (
    <Paper shadow="xs" p="md">
      <Stack align="center" justify="center">
        <Text>Add New Specialization</Text>

        <TextInput
          placeholder="Surgeon"
          label="Specialization title"
          description="This value must be unique"
          error={error}
          required
          value={value}
          onChange={(evt) => setValue(evt.currentTarget.value)}
        />

        <Button onClick={onClick}>Add</Button>
      </Stack>
    </Paper>
  );
};

export default SpecializationPage;
