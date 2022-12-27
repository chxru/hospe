import {
  CreateEmployeeDto,
  GetSpecializationDto,
  zCreateEmployee,
} from '@hospe/types';
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
import { FC } from 'react';
import { showNotification } from '@mantine/notifications';

export interface SpecializedFieldDetailsProps {
  specializedFields: GetSpecializationDto['data'];
  onSubmit: (values: CreateEmployeeDto) => Promise<void>;
}

export const RegistrationForm: FC<SpecializedFieldDetailsProps> = (props) => {
  const form = useForm<CreateEmployeeDto>({
    validate: zodResolver(zCreateEmployee),
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      phone: '',
      specialization: '',
      qualification: '',
    },
  });
  return (
    <Box sx={{ maxWidth: '100vw' }} mx="auto">
      <form
        onSubmit={async (evt) => {
          evt.preventDefault();

          try {
            await props.onSubmit(form.values);
            showNotification({ message: 'Success', color: 'teal' });

            form.reset();
          } catch (error) {
            console.error(error);
            showNotification({
              message: 'Doctor insertion failed',
              color: 'red',
            });
          }
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
