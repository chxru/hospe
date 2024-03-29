import { GetChannelsByTypeDto } from '@hospe/types';
import { Center, Group, ScrollArea, Text, Table } from '@mantine/core';
import { FC } from 'react';
import { Calendar, Clock, User } from 'tabler-icons-react';
import { Payment } from '../../common/payment';
interface SearchResProps {
  data: GetChannelsByTypeDto[];
}

interface ModifiedData extends Omit<GetChannelsByTypeDto, 'time' | 'date'> {
  time: string;
  date: string;
}

const MakeTwoDigits = (num: number) => {
  return num < 10 ? `0${num}` : num;
};

export const SearchRes: FC<SearchResProps> = ({ data }) => {
  const MakeTwoDigits = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  const items: ModifiedData[] = data.map((item) => {
    const date = new Date(item.date);
    const time = new Date(item.time);
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

  const rows = items.map((item) => (
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
          <Text size="sm" weight={500}>
            Dr.{item.docName}
          </Text>
        </Center>
        <Center>
          <User size={18} />
          <Text size="sm" weight={500}>
            {item.docType.toUpperCase()}
          </Text>
        </Center>
      </td>

      <td>
        {/* View button */}
        <Center>
          <Group>
            <Payment session_id={item._id} fee={1000} />
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
