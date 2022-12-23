import { UpcomingDetails } from '@hospe/ui';
import { Api } from '@hospe/next';
import {
  Paper,
  SimpleGrid,
  Divider,
  ScrollArea,
  Text,
  Group,
} from '@mantine/core';
import { Report } from 'tabler-icons-react';
import { useEffect, useState } from 'react';

interface Session {
  __v: string;
  docId: string;
  _id: string;
  date: string;
  time: string;
  maximumPatients: number;
  doctorFee: number;
}

export function Index() {
  const [session, setSession] = useState<Session[]>([]);

  useEffect(() => {
    Api.Doctor.GetAll().then((res) => {
      setSession(res);
    });
  }, []);

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
              <UpcomingDetails upcomingDetailsdata={session} />
            </ScrollArea>
          </Paper>
        </div>
      </SimpleGrid>
    </>
  );
}

export default Index;
