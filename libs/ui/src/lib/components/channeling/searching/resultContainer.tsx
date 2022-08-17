import { FC } from 'react';
import { Grid, Text, Paper } from '@mantine/core';

interface ResultContainerProps {
  date: string;
}
export interface ContainerDetailsProps {
  data: ResultContainerProps[];
}

export const ResultContainer: FC<ContainerDetailsProps> = ({ data }) => {
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
      <Text>{data[0].date}</Text>
      <hr />
      <Grid>
        <Grid.Col md={6}></Grid.Col>
        <Grid.Col md={6}></Grid.Col>
        <Grid.Col md={6}></Grid.Col>
        <Grid.Col md={6}></Grid.Col>
      </Grid>
    </Paper>
  );
};
