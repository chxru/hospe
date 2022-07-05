import { Grid, Text, Paper } from '@mantine/core';
import { ResultCard } from './resultCard';

export const ResultContainer = ({ ...props }) => {
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
          <ResultCard />
        </Grid.Col>
        <Grid.Col md={6}>
          <ResultCard />
        </Grid.Col>
        <Grid.Col md={6}>
          <ResultCard />
        </Grid.Col>
        <Grid.Col md={6}>
          <ResultCard />
        </Grid.Col>
      </Grid>
    </Paper>
  );
};
