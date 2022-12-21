import { FC } from 'react';
import { Text, Table, ScrollArea, Group, Center, Button } from '@mantine/core';
import { Clock, Calendar, User, Location } from 'tabler-icons-react';

interface RowAppoinmentsProps {
  time: string;
  date: string;
  patientsNumber: number;
  location: string;
}

export interface UpcomingAppoinmentsProps {
  upcomingAppoinmentsdata: RowAppoinmentsProps[];
}

export const UpcomingAppoinments: FC<UpcomingAppoinmentsProps> = ({
  upcomingAppoinmentsdata,
}) => {
  const rows = upcomingAppoinmentsdata.map((item) => (
    <tr key={item.time}>
      {/* Appointment Date and time */}
      <td>
        <Text size="sm" weight={500}>
          <Group>
            <Calendar size={18} /> {item.date}
          </Group>
        </Text>
        <Text size="sm" weight={500} mt={'xs'}>
          <Group>
            <Clock size={18} /> {item.time}
          </Group>
        </Text>
      </td>

      <td>
        {/* Doctor's name */}
        <Center>
          <User size={18} />
          <Text size="sm" weight={500}>
            doctor name
          </Text>
        </Center>
        <Center>
          <Group>
            <Text size="xs" weight={500}>
              Specialization
            </Text>
          </Group>
        </Center>
      </td>

      <td>
        {/* room number */}
        <Center>
          <Group>
            <Location size={18} />
            <Text size="sm" weight={500}>
              {item.location}
            </Text>
          </Group>
        </Center>
      </td>

      <td>
        {/* View button */}
        <Center>
          <Group>
            <Button variant="outline" color="dark">
              View
            </Button>
          </Group>
        </Center>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 500 }} verticalSpacing="lg">
        <thead>
          <tr>
            <th></th>
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
