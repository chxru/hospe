import { Api } from '@hospe/next';
import { CreateSessionForm } from '@hospe/ui';
import { Center, Divider, Group, Paper, Text } from '@mantine/core';
import { ReportMedical } from 'tabler-icons-react';
import { ICreateSessionForm } from '@hospe/types';
import { showNotification } from '@mantine/notifications';

const CreateSession = () => {
  const onSubmit = async (values: ICreateSessionForm) => {
    try {
      await Api.Channeling.Create({
        ...values,
        date: values.date.toISOString(),
        time: values.time.toISOString(),
      });

      showNotification({
        title: 'New session created',
        message: 'New session created successfully',
        color: 'teal',
      });
    } catch (error) {
      console.error(error);
      showNotification({
        title: 'Creating new session failed',
        message: 'Something went wrong',
        color: 'red',
      });
    }
  };

  return (
    <div>
      <Center>
        <Paper
          radius="md"
          shadow="sm"
          withBorder
          p="lg"
          m="md"
          style={{ height: '100%', width: 500 }}
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
          })}
        >
          <Text size="md" pb={12}>
            New Session
          </Text>
          <Divider my="sm" />

          <Group mb={'sm'}>
            <ReportMedical size={18} />
            <Text size="sm">Add new channeling session</Text>
          </Group>

          <CreateSessionForm onSubmit={onSubmit} />
        </Paper>
      </Center>
    </div>
  );
};

export default CreateSession;
