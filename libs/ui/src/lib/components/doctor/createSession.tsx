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

export const CreateSession = () => {
  const form = useForm({
    initialValues: {
      date: '',
      time: '',
      maxPatients: '',
      doctorFee: '',
    },
  });
  return (
    <Box sx={{ maxWidth: '100vw' }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
            {...form.getInputProps('maxPatients')}
          />

          {/* Doctor Fee */}
          <NumberInput
            label="Doctor Fee (LKR)"
            placeholder="Enter Doctor Fee"
            defaultValue={1000}
            step={100}
            {...form.getInputProps('doctorFee')}
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
