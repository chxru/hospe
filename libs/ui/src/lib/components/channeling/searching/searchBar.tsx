import {
  TextInput,
  Button,
  Box,
  Grid,
  Container,
  NativeSelect,
  Select,
  Center,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';

export const SearchBar = ({ ...props }) => {
  return (
    <Container>
      <Box>
        <Grid
          sx={(theme) => ({
            backgroundColor: '#e6f3fa',
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
          })}
        >
          <Grid.Col md={4}>
            <Select
              data={[
                'Endocrinologists',
                'Gastroenterologists',
                'Nephrologists',
                'SUrologists',
              ]}
              placeholder="Select Specialization"
              label="Specialization"
              radius="md"
              size="md"
            />
          </Grid.Col>
          <Grid.Col md={8}>
            <TextInput
              radius="md"
              size="md"
              label="Doctor Name"
              rightSectionWidth={42}
              {...props}
            />
          </Grid.Col>
          <Grid.Col md={4}>
            <NativeSelect
              data={['Any', 'Morning', 'Evening']}
              label="Prefered Time"
              placeholder="Any"
              radius="md"
              size="md"
            />
          </Grid.Col>
          <Grid.Col md={4}>
            <NativeSelect
              data={['Any', 'Male', 'Female']}
              label="Gender"
              placeholder="Any"
              radius="md"
              size="md"
            />
          </Grid.Col>
          <Grid.Col md={4}>
            <DatePicker
              placeholder="Any /Any /Any"
              label="Date"
              radius="md"
              size="md"
            />
          </Grid.Col>

          <Grid.Col md={12}>
            <Center>
              <Button variant="filled" radius="md" size="md">
                Channel Search
              </Button>
            </Center>
          </Grid.Col>
        </Grid>
      </Box>
    </Container>
  );
};
