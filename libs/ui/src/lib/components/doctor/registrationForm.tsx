import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import {
  TextInput,
  Button,
  Box,
  Group,
  SimpleGrid,
  Select,
  Center,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { FC } from 'react';

interface SpecialisedFieldProps {
  value: string;
  label: string;
}

export interface SpecialisedFieldDetailsProps {
  data: SpecialisedFieldProps[];
}

const schema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'Name should have at least 2 letters' }),
  lastName: z
    .string()
    .min(2, { message: 'Name should have at least 2 letters' }),
  email: z.string().email({ message: 'Invalid email' }),
  mobileNumber: z.string().min(10, { message: 'Invalid mobile number' }),
  age: z
    .number()
    .min(18, { message: 'You must be at least 18 to create an account' }),
  birthDay: z.date().max(new Date(), { message: 'BirthDay is not valid date' }),
});

export const RegistrationForm: FC<SpecialisedFieldDetailsProps> = (data) => {
  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      age: '',
      moblieNumber: '',
      birthDay: '',
      specialisation: '',
      qualification: '',
    },
  });
  return (
    <Box sx={{ maxWidth: '100vw' }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <SimpleGrid
          cols={2}
          spacing="lg"
          breakpoints={[
            { maxWidth: 'md', cols: 2, spacing: 'sm' },
            { maxWidth: 'sm', cols: 1, spacing: 'sm' },
          ]}
        >
          {/* First Name */}
          <div>
            <TextInput
              required
              label="First Name"
              placeholder="First Name"
              {...form.getInputProps('firstName')}
            />
          </div>

          {/* Last Name */}
          <div>
            <TextInput
              required
              label="Last Name"
              placeholder="Last Name"
              {...form.getInputProps('lastName')}
            />
          </div>

          {/* Gender */}
          <div>
            <Select
              clearable
              required
              label="Gender"
              placeholder="Select your gender"
              data={[
                { value: 'Male', label: 'Male' },
                { value: 'Female', label: 'Female' },
                { value: 'Other', label: 'Other' },
              ]}
              {...form.getInputProps('gender')}
            />
          </div>

          {/* Birthday */}
          <div>
            <DatePicker
              placeholder="Select your Birthday"
              label="Birthday"
              required
              {...form.getInputProps('birthDay')}
            />
          </div>

          {/* Email */}
          <div>
            <TextInput
              required
              label="Email"
              placeholder="Enter your email address"
              {...form.getInputProps('email')}
            />
          </div>

          {/* Mobile Number */}
          <div>
            <TextInput
              required
              label="Mobile Number"
              placeholder="Enter your mobile number"
              {...form.getInputProps('moblieNumber')}
            />
          </div>

          {/* Specialised Field */}
          <div>
            <Select
              clearable
              required
              label="Specialised Field"
              placeholder="Select your specialisation"
              data={data.data}
              {...form.getInputProps('specialisation')}
            />
          </div>

          {/* Qualification */}
          <div>
            <TextInput
              required
              label="Qualifications"
              placeholder="Enter your Qualifications"
              {...form.getInputProps('qualification')}
            />
          </div>
        </SimpleGrid>
        <Center>
          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </Center>
      </form>
    </Box>
  );
};
