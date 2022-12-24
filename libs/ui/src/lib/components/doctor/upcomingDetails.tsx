import { FC } from 'react';
import { Text, Table, ScrollArea, Group, Center, Button } from '@mantine/core';
import { Clock, Calendar, User } from 'tabler-icons-react';
import { useForm } from '@mantine/hooks';
interface RowDetailsProps {
  __v: string;
  _id: string;
  docId: string;
  date: string;
  time: string;
  maximumPatients: number;
  doctorFee: number;
}

export interface Formdata {
  _id: string;
}

export interface UpcomingDetailsProps {
  upcomingDetailsdata: RowDetailsProps[];
  onSubmit: (values: Formdata) => void;
}

export const UpcomingDetails: FC<UpcomingDetailsProps> = ({
  upcomingDetailsdata,
  onSubmit,
}) => {
  const form = useForm<Formdata>({
    initialValues: {
      _id: '',
    },
  });

  const newRows = upcomingDetailsdata.map((item) => (
    <tr key={item.time}>
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
        {/* Number of active patients */}
        <Center>
          <Text size="xs" weight={500}>
            Maximum Patients
          </Text>
        </Center>
        <Center>
          <Group>
            <User size={18} />
            <Text size="sm" weight={500}>
              {item.maximumPatients}
            </Text>
          </Group>
        </Center>
      </td>

      <td>
        {/* Button */}
        <form onSubmit={form.onSubmit(onSubmit)}>
          <Button
            type="submit"
            color="red"
            onClick={() => form.setFieldValue('_id', item._id)}
          >
            Delete
          </Button>
        </form>
      </td>
    </tr>
  ));

  return (
    <div>
      <ScrollArea>
        <Table sx={{ minWidth: 500 }} verticalSpacing="lg">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{newRows}</tbody>
        </Table>
      </ScrollArea>
    </div>
  );
};
