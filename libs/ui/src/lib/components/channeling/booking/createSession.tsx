import { useForm } from '@mantine/hooks';
import {
  NumberInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
} from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';
import { Clock, Calendar } from 'tabler-icons-react';

interface SessionForm {
  date: undefined;
  time: undefined;
  patients: number;
}

interface CreateSessionFormProps {
  onSubmit: (values: SessionForm) => void;
}

export const CreateSession: React.FC<CreateSessionFormProps> = ({
  onSubmit,
}) => {
  const form = useForm<SessionForm>({
    initialValues: {
      date: undefined,
      time: undefined,
      patients: 1,
    },
  });

  return (
    <Paper radius="md" p="xl" withBorder>
      <Text size="lg" weight={500}>
        Create New Session
      </Text>
      <Divider my="lg" />

      <form onSubmit={form.onSubmit(onSubmit)}>
        <Group direction="column" grow>
          <DatePicker
            placeholder="Select date"
            label="Session Date"
            required
            icon={<Calendar size={16} />}
            value={form.values.date}
          />

          <TimeInput
            label="Session Time"
            format="12"
            required
            placeholder="PICKUP TIME"
            icon={<Clock size={16} />}
            defaultValue={new Date()}
            value={form.values.time}
          />

          <NumberInput
            mt="sm"
            label="Maximum Number of Patients"
            value={form.values.patients}
          />
        </Group>

        <Group position="apart" mt="xl">
          <Button type="submit"> Create New Session</Button>
        </Group>
      </form>
    </Paper>
  );
};
