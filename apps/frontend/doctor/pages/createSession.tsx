import { CreateSession } from '@hospe/ui';
import { Center, Divider, Group, Paper, Text } from '@mantine/core';
import { ReportMedical } from 'tabler-icons-react';

const createSession = () => {
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

          <CreateSession />
        </Paper>
      </Center>
    </div>
  );
};

export default createSession;
