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
  _id: string;
  docId: string;
  docType: string;
  date: string;
  time: string;
  maximumPatient: number;
  fee: number;
  docName: string;
  count: number;
}

export interface Formdata {
  _id: string;
}
export function Index() {
  const [session, setSession] = useState<Session[]>([]);

  useEffect(() => {
    Api.Channeling.GetAll().then((res) => {
      setSession(res);
    });
  }, []);

  const onSubmit = async (values: Formdata) => {
    await Api.Channeling.Delete(values._id);
    Api.Channeling.GetAll().then((res) => {
      setSession(res);
    });
  };

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
              <UpcomingDetails
                upcomingDetailsdata={session}
                onSubmit={onSubmit}
              />
            </ScrollArea>
          </Paper>
        </div>
      </SimpleGrid>
    </>
  );
}

export default Index;
