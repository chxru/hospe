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
import { useForm } from '@mantine/hooks';

interface SearchBarProps {
  specializations: string[];
  time: string[];
  gender: string[];
}

export interface Formdata {
  Doctype: string;
}

export interface SearchDetailsProps {
  searchData: SearchBarProps[];
  onSubmit: (values: Formdata) => void;
}

export const SearchBar: FC<SearchDetailsProps> = (props) => {
  const form = useForm<Formdata>({
    initialValues: {
      Doctype: '',
    },
  });
  return (
    <Container>
      <Box>
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            props.onSubmit(form.values);
          }}
        >
          <Center>
            <Grid
              sx={(theme) => ({
                backgroundColor: '#e6f3fa',
                padding: theme.spacing.xl,
                borderRadius: theme.radius.md,
              })}
            >
              <Select
                data={props.searchData[0].specializations}
                placeholder="Select Specialization"
                label="Specialization"
                radius="md"
                size="md"
                {...form.getInputProps('Doctype')}
              />
            </Grid>
          </Center>
          <Center>
            <Grid>
              <Button type="submit">Search</Button>
            </Grid>
          </Center>
        </form>
      </Box>
    </Container>
  );
};
