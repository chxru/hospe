import {
  SimpleGrid,
  Text,
  Paper,
  Divider,
  Title,
  ScrollArea,
  Group,
} from '@mantine/core';
import { ChannelDetailCard, CardProps } from './details';
import { UpcomingAppointmentCard } from './upcomingAppointments';
import { Users } from 'tabler-icons-react';
import { FC } from 'react';

export interface DashboardProps {
  active_patients?: number;
}

interface ChannelDashboardProps {
  detailCard_data: CardProps[];
  data: DashboardProps[];
}

export const ChannelDashboard: FC<ChannelDashboardProps> = ({
  detailCard_data,
  data,
}) => {
  const active_patient = data.map((feature) => (
    <Text size="sm">{feature.active_patients}</Text>
  ));

  return (
    <Paper
      radius="md"
      shadow="sm"
      withBorder
      p="lg"
      m="xs"
      style={{ height: '100%' }}
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
        <div>
          <Title color="dimmed" order={4}>
            Today Appointments
          </Title>

          <Divider my="sm" />

          <Group mb={'xs'}>
            <Users scale={18} />
            <Group>
              <Text size="sm">Active Patients :</Text>
              <Text>{active_patient}</Text>
            </Group>
          </Group>

          <ScrollArea style={{ height: 300 }}>
            <ChannelDetailCard patient_data={detailCard_data} />
          </ScrollArea>
        </div>
        <div>
          <Title color="dimmed" order={4}>
            Upcoming Appointments
          </Title>
          <Divider my="sm" />
          <ScrollArea style={{ height: 300 }}>
            <UpcomingAppointmentCard />
            <UpcomingAppointmentCard />
            <UpcomingAppointmentCard />
            <UpcomingAppointmentCard />
            <UpcomingAppointmentCard />
            <UpcomingAppointmentCard />
            <UpcomingAppointmentCard />
          </ScrollArea>
        </div>
      </SimpleGrid>
    </Paper>
  );
};
