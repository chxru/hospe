import { Center, Group, ScrollArea, Text, Table, Button } from '@mantine/core';
import { FC } from 'react';
import { Calendar, Clock, User } from 'tabler-icons-react';
import { Api } from '@hospe/next';

interface RowDetailsProps {
  _id: string;
  docType: string;
  docFee: number;
  time: string;
  maximumPatients: number;
  date: string;
  docName: string;
}

interface sesionData {
  _id: string;
  docType: string;
  docFee: number;
  time: string;
  maximumPatients: number;
  date: string;
  docName: string;
}

export interface searchDataProps {
  searchData: RowDetailsProps[];
}

export const SearchRes: FC<searchDataProps> = ({ searchData }) => {
  const getData = async (value: sesionData) => {
    const session = {
      sessionId: value._id,
    };
    const updateSession = {
      id: value._id,
      activePatients: value.maximumPatients - 1,
    };

    await Api.Booking.CreateBooking(session);
  };

  const rows = searchData.map((item) => (
    <tr key={item._id}>
      {/* Appointment Date and time */}
      <td>
        <Text size="sm" weight={500}>
          <Group>
            <Calendar size={18} /> {item.date.slice(0, 10)}
          </Group>
        </Text>
        <Text size="sm" weight={500} mt={'xs'}>
          <Group>
            <Clock size={18} /> {item.time.slice(11, -8)}
          </Group>
        </Text>
      </td>

      <td>
        {/* Doctor's name */}
        <Center>
          <Text size="sm" weight={500}>
            {item.docName}
          </Text>
        </Center>
        <Center>
          <User size={18} />
          <Text size="sm" weight={500}>
            {item.docType}
          </Text>
        </Center>
      </td>

      <td>
        {/* Booking button */}
        <Center>
          <Group>
            <Button
              onClick={() => {
                getData(item);
              }}
            >
              Booking Session
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
