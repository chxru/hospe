import React, {useState} from 'react';
import {
  TextInput,
  Button,
  Box,
  Grid,
  Container,
  Collapse,
  Divider,
  ActionIcon,
  useMantineTheme,
  NativeSelect,
  Center} from '@mantine/core';
import {
  ArrowRight,
  ArrowLeft,
  ArrowDownCircle,
  Search } from 'tabler-icons-react';
import { DatePicker } from '@mantine/dates';

export const Searchbar = ({...props}) => {

  const [opened, setOpen] = useState(false);
  const theme = useMantineTheme();

  return (
    <Container>

      <Box>
        <Grid sx={(theme) =>({backgroundColor: 'lightblue',
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,})}>

          <Grid.Col md={12}>
          <TextInput
            icon={<Search size={18} />}
            radius="xl"
            size="md"
            rightSection={
              <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
                {theme.dir === 'ltr' ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
              </ActionIcon>
            }
            placeholder="Search Doctors/Specialization"
            rightSectionWidth={42}
            {...props}
          />
          </Grid.Col>

        </Grid>
      </Box>

      <Divider m="xs" label="Advance Search" labelPosition="center" />
      <Center>
        <ActionIcon variant="transparent" color="blue" onClick={() => setOpen((o) => !o)}>
          <ArrowDownCircle/>
        </ActionIcon>
      </Center>

      <Box m='xs'>
        <Collapse in={opened}>
          <Grid sx={(theme) =>({backgroundColor: 'lightblue',
              padding: theme.spacing.xl,
              borderRadius: theme.radius.md,})}>
            <Grid.Col md={3} >
              <NativeSelect
                data={['React', 'Vue', 'Angular', 'Svelte']}
                placeholder="Sepecialization"
                radius="xl"
              />
            </Grid.Col>
            <Grid.Col md={3} >
              <NativeSelect
                data={['React', 'Vue', 'Angular', 'Svelte']}
                placeholder="Gender"
                radius="xl"
              />
            </Grid.Col>
            <Grid.Col md={3} >
              <NativeSelect
                data={['React', 'Vue', 'Angular', 'Svelte']}
                placeholder="Session Time"
                radius="xl"
              />
            </Grid.Col>
            <Grid.Col md={3} >
              <DatePicker
                placeholder="Pick date"
                radius="xl"/>
            </Grid.Col>
            <Grid.Col md={12}>
              <Center>
                <Button> Search </Button>
              </Center>
            </Grid.Col>

          </Grid>
        </Collapse>
      </Box>
    </Container>
  );
}
