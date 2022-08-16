import { FC } from 'react';
import { Text, Table, ScrollArea, Group, Center } from '@mantine/core';
import { Clock, Calendar, User, Location } from 'tabler-icons-react';

interface RowDetailsProps {
  time: string;
  date: string;
  patientsNumber: number;
  location: string;
}

export interface UpcomingDetailsProps {
  upcomingDetailsdata: RowDetailsProps[];
}

export const UpcomingDetails: FC<UpcomingDetailsProps> = ({
  upcomingDetailsdata,
}) => {
  const rows = upcomingDetailsdata.map((item) => (
    <tr key={item.time}>
      {/* Appointment Date and time */}
      <td>
        <Text size="sm" weight={500}>
          <Group>
            <Calendar size={20} /> {item.date}
          </Group>
        </Text>
        <Text size="sm" weight={500} mt={'xs'}>
          <Group>
            <Clock size={20} /> {item.time}
          </Group>
        </Text>
      </td>

      <td>
        {/* Number of active patients */}
        <Center>
          <Text size="md" weight={500}>
            Active Patients
          </Text>
        </Center>
        <Center>
          <Group>
            <User size={20} />
            <Text size="md" weight={500}>
              {item.patientsNumber}
            </Text>
          </Group>
        </Center>
      </td>

      <td>
        <Center>
          <Group>
            <Location />
            <Text size="md" weight={500}>
              {item.location}
            </Text>
          </Group>
        </Center>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 600 }} verticalSpacing="lg">
        <thead>
          <tr>
            <th> </th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
};
