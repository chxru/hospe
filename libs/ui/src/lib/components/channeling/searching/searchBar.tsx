import { FC } from 'react';
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

interface SearchBarProps {
  specializations: string[];
  time: string[];
  gender: string[];
}

export interface SearchDetailsProps {
  searchData: SearchBarProps[];
}

export const SearchBar: FC<SearchDetailsProps> = ({ searchData }) => {
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
              data={searchData[0].specializations}
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
            />
          </Grid.Col>
          <Grid.Col md={4}>
            <NativeSelect
              data={searchData[0].time}
              label="Prefered Time"
              placeholder="Any"
              radius="md"
              size="md"
            />
          </Grid.Col>
          <Grid.Col md={4}>
            <NativeSelect
              data={searchData[0].gender}
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
