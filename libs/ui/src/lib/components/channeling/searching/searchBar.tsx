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
  Paper,
  Group,
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
          <Paper
            radius="md"
            shadow="sm"
            withBorder
            p="lg"
            m="md"
            style={{ height: '100%' }}
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.white,
            })}
          >
            <Center>
              <Grid>
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
              <Grid mt={'sm'}>
                <Button type="submit">Search</Button>
              </Grid>
            </Center>
          </Paper>
        </form>
      </Box>
    </Container>
  );
};
