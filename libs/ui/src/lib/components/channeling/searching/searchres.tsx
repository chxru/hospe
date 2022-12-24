import { Center, Group, ScrollArea, Text, Table } from '@mantine/core';
import { FC } from 'react';
import { Calendar, Clock, User } from 'tabler-icons-react';
import { Payment } from '../../common/payment';

interface RowDetailsProps {
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

export const SearchRes: FC<searchDataProps> = ({ searchData }, doctorfee) => {
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
        {/* View button */}
        <Center>
          <Group>
            <Payment paymentData={doctorfee} />
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
