import { FC, useState } from 'react';
import { Text, Table, ScrollArea, Group, Center, Button } from '@mantine/core';
import { Clock, Calendar, User } from 'tabler-icons-react';
import { useForm } from '@mantine/hooks';
import { Api } from '@hospe/next';
import { showNotification } from '@mantine/notifications';
interface RowDetailsProps {
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

  const [disabledIds, setDisabledIds] = useState<string[]>([]);

  const CloseChanneling = async (id: string) => {
    await Api.Channeling.Close(id);

    showNotification({
      title: 'Channeling Closed',
      message: 'Channeling Closed Successfully',
      color: 'teal',
    });

    setDisabledIds((x) => [...x, id]);
  };

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
            Subscribed Patients
          </Text>
        </Center>
        <Center>
          <Group>
            <User size={18} />
            <Text size="sm" weight={500}>
              {item.count || 0}
            </Text>
          </Group>
        </Center>
      </td>

      <td>
        <span style={{ display: 'flex' }}>
          {/* Button */}
          <form onSubmit={form.onSubmit(onSubmit)}>
            <Button
              type="submit"
              color="red"
              onClick={() => form.setFieldValue('_id', item._id)}
              disabled={item.count > 0}
            >
              Delete
            </Button>
          </form>

          <Button
            ml="15px"
            disabled={disabledIds.indexOf(item._id) !== -1}
            onClick={() => CloseChanneling(item._id)}
          >
            Finished
          </Button>
        </span>
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
