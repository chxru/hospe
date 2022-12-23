import { PatientDetails, UpcomingDetails } from '@hospe/ui';
import {
  Paper,
  SimpleGrid,
  Divider,
  ScrollArea,
  Text,
  Group,
} from '@mantine/core';
import { Users, Report } from 'tabler-icons-react';

export function Index() {
  return (
    <>
      <SimpleGrid
        cols={1}
        spacing="xs"
        breakpoints={[
          { maxWidth: 'md', cols: 2, spacing: 'xs' },
          { maxWidth: 'sm', cols: 1, spacing: 'sm' },
        ]}
      >
        {/* Patients Details */}
        <div style={{ height: 450 }}>
          <Paper
            radius="md"
            shadow="sm"
            withBorder
            p="lg"
            m="md"
            style={{ height: '100%' }}
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.white,
            })}
          >
            <Text size="md" pb={12}>
              Today Appointments
            </Text>
            <Divider my="sm" />
            <Group mb={'sm'}>
              <Users size={18} />
              <Text size="xs">10 Active Patients</Text>
            </Group>

            <ScrollArea
              style={{ height: '80%', width: '100%', paddingBottom: 12 }}
              type="hover"
            >
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
          </Paper>
        </div>

        {/* Upcoming Appointments */}
        <div style={{ height: 450 }}>
          <Paper
            radius="md"
            shadow="sm"
            withBorder
            p="lg"
            m="md"
            style={{ height: '100%' }}
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.white,
            })}
          >
            <Text size="md" pb={12}>
              Upcoming Appointments
            </Text>
            <Divider my="sm" />

            <Group mb={'sm'}>
              <Report size={22} />
              <Text size="sm">Summary of Upcoming Events</Text>
            </Group>

            <ScrollArea style={{ height: '80%', width: '100%' }}>
              <UpcomingDetails
                upcomingDetailsdata={[
                  {
                    time: '8.30 PM',
                    date: '2022-08-15',
                    patientsNumber: 12,
                    location: 'Room 06',
                  },

                  {
                    time: '10.30 PM',
                    date: '2022-08-16',
                    patientsNumber: 25,
                    location: 'Room 08',
                  },

                  {
                    time: '8.30 PM',
                    date: '2022-08-16',
                    patientsNumber: 32,
                    location: 'Room 10',
                  },

                  {
                    time: '8.30 PM',
                    date: '2022-08-15',
                    patientsNumber: 12,
                    location: 'Room 06',
                  },

                  {
                    time: '8.30 PM',
                    date: '2022-08-15',
                    patientsNumber: 12,
                    location: 'Room 06',
                  },

                  {
                    time: '8.30 PM',
                    date: '2022-08-15',
                    patientsNumber: 12,
                    location: 'Room 06',
                  },
                ]}
              />
            </ScrollArea>
          </Paper>
        </div>
      </SimpleGrid>
    </>
  );
}

export default Index;
