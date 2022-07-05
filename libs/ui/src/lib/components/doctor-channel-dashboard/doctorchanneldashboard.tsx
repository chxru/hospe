import {
  SimpleGrid,
  Text,
  Paper,
  Divider,
  Title,
  Center,
  ScrollArea,
} from '@mantine/core';
import { ChannelDetailCard } from '../channel-detail-card/channeldetailcard';
import { UpcomingAppointmentCard } from './upcomingappointments';
import { Users } from 'tabler-icons-react';

const mockdata = [{ label: '10 Active Patients', icon: Users }];

const features = mockdata.map((feature) => (
  <Center inline key={feature.label}>
    <feature.icon size={18} />
    <Text ml={'xs'} size="xs">
      {feature.label}
    </Text>
  </Center>
));

export const ChannelDashboard = ({ ...props }) => {
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
          <Text mt={'sm'}>{features}</Text>
          <ScrollArea style={{ height: 300 }}>
            <ChannelDetailCard />
            <ChannelDetailCard />
            <ChannelDetailCard />
            <ChannelDetailCard />
            <ChannelDetailCard />
            <ChannelDetailCard />
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
