import { Grid, Text, Paper } from '@mantine/core';
import { Resultcard } from '../result-card/resultcard';

export const Resultcontainer = ({ ...props }) => {
  return (
    <Paper
      radius="md"
      shadow="sm"
      withBorder
      p="lg"
      m="xs"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Text>20th May 2022</Text>
      <hr />
      <Grid>
        <Grid.Col md={6}>
          <Resultcard />
        </Grid.Col>
        <Grid.Col md={6}>
          <Resultcard />
        </Grid.Col>
        <Grid.Col md={6}>
          <Resultcard />
        </Grid.Col>
        <Grid.Col md={6}>
          <Resultcard />
        </Grid.Col>
      </Grid>
    </Paper>
  );
};
