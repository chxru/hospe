import { useForm } from '@mantine/form';
import {
  Button,
  Box,
  Group,
  SimpleGrid,
  Center,
  NumberInput,
} from '@mantine/core';
import { DatePicker, TimeInput } from '@mantine/dates';
import { ICreateSessionForm } from '@hospe/types';

interface CreateSessionProps {
  onSubmit: (values: ICreateSessionForm) => void;
}

export const CreateSessionForm: React.FC<CreateSessionProps> = ({
  onSubmit,
}) => {
  const today = new Date();
  const form = useForm<ICreateSessionForm>({
    initialValues: {
      date: today,
      time: today,
      maxPatient: 1000,
      fee: 1000,
    },
  });

  return (
    <Box sx={{ maxWidth: '100vw' }} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => {
          onSubmit(values);
          form.reset();
        })}
      >
        <SimpleGrid
          cols={1}
          mt={'lg'}
          spacing="lg"
          breakpoints={[
            { maxWidth: 'md', cols: 2, spacing: 'sm' },
            { maxWidth: 'sm', cols: 1, spacing: 'sm' },
          ]}
        >
          {/* Session Date */}
          <div>
            <DatePicker
              placeholder="Select session date"
              label="Date"
              required
              {...form.getInputProps('date')}
            />
          </div>

          {/* Session Time */}
          <TimeInput
            label="Session Time"
            placeholder="Enter Session Time"
            defaultValue={new Date()}
            {...form.getInputProps('time')}
          />

          {/* Number of Maximum Patients */}
          <NumberInput
            label="Number of Maximum Patients"
            placeholder="Enter Number of Maximum Patients"
            max={50}
            min={1}
            {...form.getInputProps('maxPatient')}
          />

          {/* Doctor Fee */}
          <NumberInput
            label="Doctor Fee (LKR)"
            placeholder="Enter Doctor Fee"
            step={1000}
            {...form.getInputProps('fee')}
          />
        </SimpleGrid>
        <Center>
          <Group position="right" mt="md">
            <Button type="submit">Create New Session</Button>
          </Group>
        </Center>
      </form>
    </Box>
  );
};
