import React, {useState} from 'react';
import {
  TextInput,
  Button,
  Group,
  Box,
  Paper,
  Text,
  Grid,
  Container,
  Collapse,
  MultiSelect,
  Center} from '@mantine/core';
import { BorderBottom, Search } from 'tabler-icons-react';

export const Searchbar = ({...props}) => {

  const data = [
    { value: 'name', label: 'Name' },
    { value: 'specialization', label: 'Specialization' },

  ];

  const [opened, setOpen] = useState(false);

  return (
    <Container>

      <Box>
        <Grid sx={(theme) => ({backgroundColor: 'lightblue',
                            padding: theme.spacing.xl,
                            borderRadius: theme.radius.md,
                            })}>
          <Grid.Col md={3} >
            <MultiSelect
              label="Select Type"
              data={data}
              placeholder=""
            />
          </Grid.Col>
          <Grid.Col md={6}>
            <TextInput
              label="Doctor Name/ Specialization"
              placeholder="Search Doctor/ Specialization"
            />
          </Grid.Col>
          <Grid.Col md={3}>
            <Button  leftIcon={<Search size={18} />}>Search</Button>
          </Grid.Col>
        </Grid>
      </Box>


    </Container>
  );
}
