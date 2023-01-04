import { Api } from '@hospe/next';
import { Center, Group, Paper, ScrollArea, Table, Text } from '@mantine/core';
import { useState, useEffect } from 'react';
import { GetChannelsByTypeDto } from '@hospe/types';
import { Clock, Calendar, User } from 'tabler-icons-react';

interface ModifiedData extends Omit<GetChannelsByTypeDto, 'time' | 'date'> {
  _id: string;
  bookingDate: string;
  bookingFee: number;
  bookingTime: string;
  channelingId: string;
  docId: string;
  docName: string;
  status: string;
  userId: string;
  date: string;
  time: string;
}

const UpcomingAppoinmentsPage = () => {
  const [session, setSession] = useState<ModifiedData[]>([]);

  useEffect(() => {
    (async () => {
      const data = await Api.Booking.GetMy();

      const MakeTwoDigits = (num: number) => {
        return num < 10 ? `0${num}` : num;
      };

      const items: ModifiedData[] = data.map((item) => {
        const date = new Date(item.bookingDate);
        const time = new Date(item.bookingTime);
        return {
          ...item,
          time: `${MakeTwoDigits(
            time.getHours() > 12 ? time.getHours() - 12 : time.getHours()
          )}:${MakeTwoDigits(time.getMinutes())} ${
            time.getHours() > 12 ? 'PM' : 'AM'
          }`,
          date: date.toLocaleDateString(),
        };
      });

      setSession(items);
    })();
  }, []);

  const rows = session.map((item) => (
    <tr key={item._id}>
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
            Dr.{item.docName}
          </Text>
        </Center>
      </td>

      <td>
        {/* Channel Fee */}
        <Center>
          <Group>
            <Text size="sm" weight={500}>
              Rs. {item.bookingFee}.00
            </Text>
          </Group>
        </Center>
      </td>

      <td></td>
    </tr>
  ));

  return (
    <Paper
      radius="md"
      shadow="sm"
      withBorder
      p="lg"
      m="md"
      style={{ height: '100%' }}
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Text size="md" pb={12} weight={700}>
        Upcoming Appointments
      </Text>
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
    </Paper>
  );
};

export default UpcomingAppoinmentsPage;
