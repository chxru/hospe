import { IDoctorCreate } from '@hospe/types';
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
import { z } from 'zod';

interface SpecializedFieldProps {
  value: string;
  label: string;
}

export interface SpecializedFieldDetailsProps {
  specializedFields: SpecializedFieldProps[];
  onSubmit: (values: IDoctorCreate) => void;
}

const schema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'Name should have at least 2 letters' }),
  lastName: z
    .string()
    .min(2, { message: 'Name should have at least 2 letters' }),
  email: z.string().email({ message: 'Invalid email' }),
  phone: z.string().min(10, { message: 'Invalid mobile number' }),
  birthday: z.date().max(new Date(), { message: 'Birthday is not valid date' }),
});

export const RegistrationForm: FC<SpecializedFieldDetailsProps> = (props) => {
  const form = useForm<IDoctorCreate>({
    validate: zodResolver(schema),
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      phone: '',
      birthday: new Date(),
      specialization: '',
      qualification: '',
    },
  });
  return (
    <Box sx={{ maxWidth: '100vw' }} mx="auto">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          props.onSubmit(form.values);
        }}
      >
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
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
                { value: 'other', label: 'Other' },
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
              {...form.getInputProps('birthday')}
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
              {...form.getInputProps('phone')}
            />
          </div>

          {/* Specialized Field */}
          <div>
            <Select
              clearable
              required
              label="Specialized Field"
              placeholder="Select your specialization"
              data={props.specializedFields}
              {...form.getInputProps('specialization')}
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
