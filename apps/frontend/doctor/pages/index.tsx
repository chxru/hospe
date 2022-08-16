import { PatientDetails } from '@hospe/ui';
import {
  Paper,
  SimpleGrid,
  Title,
  Divider,
  ScrollArea,
  Text,
  Group,
} from '@mantine/core';
import { Users } from 'tabler-icons-react';

export function Index() {
  return (
    <Paper
      radius="md"
      shadow="sm"
      withBorder
      p="lg"
      m="xs"
      style={{ height: '100vh' }}
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
    >
      <SimpleGrid
        cols={2}
        spacing="lg"
        breakpoints={[
          { maxWidth: 'md', cols: 2, spacing: 'sm' },
          { maxWidth: 'sm', cols: 1, spacing: 'sm' },
        ]}
      >
        {/* The details of the patient who were booked an appointment. */}
        <div>
          <Title color="dimmed" order={4}>
            Today Appointments
          </Title>
          <Divider my="sm" />
          <Group mb={'sm'}>
            <Users size={18} />
            <Text size="xs">10 Active Patients</Text>
          </Group>

          <ScrollArea style={{ height: '100vh', width: '100%' }}>
            <PatientDetails
              patientdata={[
                {
                  name: 'John Davis',
                  gender: 'Male',
                  age: 54,
                  appointmentNumber: 1,
                },
                {
                  name: 'John Harison',
                  gender: 'Male',
                  age: 22,
                  appointmentNumber: 2,
                },
                {
                  name: 'John Paker',
                  gender: 'Male',
                  age: 95,
                  appointmentNumber: 3,
                },
                {
                  name: 'John Hamilton',
                  gender: 'Female',
                  age: 22,
                  appointmentNumber: 4,
                },
                {
                  name: 'John',
                  gender: 'Female',
                  age: 30,
                  appointmentNumber: 5,
                },
                {
                  name: 'John Paker',
                  gender: 'Male',
                  age: 95,
                  appointmentNumber: 6,
                },
                {
                  name: 'John Hamilton',
                  gender: 'Female',
                  age: 22,
                  appointmentNumber: 7,
                },
              ]}
            />
          </ScrollArea>
        </div>

        <div>
          <Title color="dimmed" order={4}>
            Upcoming Appointments
          </Title>
          <Divider my="sm" />
          <ScrollArea style={{ height: 300 }}></ScrollArea>
        </div>
      </SimpleGrid>
    </Paper>
  );
}

export default Index;
