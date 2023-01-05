import { FC, useEffect, useState } from 'react';
import {
  Button,
  Box,
  Grid,
  Container,
  Select,
  Center,
  Paper,
} from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { Api } from '@hospe/next';
import { GetSpecialization } from '@hospe/types';

export interface ISearchDoctor {
  type: string;
}

export interface SearchDetailsProps {
  onSubmit: (values: ISearchDoctor) => void;
}

export const SearchBar: FC<SearchDetailsProps> = (props) => {
  const [specialization, setSpecialization] = useState<GetSpecialization[]>([]);

  const form = useForm<ISearchDoctor>({
    initialValues: {
      type: '',
    },
  });

  useEffect(() => {
    (async () => {
      const { data } = await Api.Booking.GetSpecializations();
      setSpecialization(data);
    })();
  }, []);

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
                  data={specialization}
                  placeholder="Select Specialization"
                  label="Specialization"
                  radius="md"
                  size="md"
                  {...form.getInputProps('type')}
                />
              </Grid>
            </Center>
            <Center>
              <Grid mt={'sm'}>
                <Button style={{ marginTop: '10px' }} type="submit">
                  Search
                </Button>
              </Grid>
            </Center>
          </Paper>
        </form>
      </Box>
    </Container>
  );
};
