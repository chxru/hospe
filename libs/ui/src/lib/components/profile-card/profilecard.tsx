import { Text, Button, Avatar, Paper, Container, Grid } from '@mantine/core';

export const Profilecard = ({ ...props }) => {
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
      <Avatar size={120} radius={120} mx="auto" />
      <Text align="center" size="lg" weight={500} mt="md">
        Charuka Samarakoon
      </Text>
      <Text align="center" color="dimmed" size="sm">
        Cardiologist
      </Text>
      <Button variant="light" radius="md" size="md" fullWidth mt="md">
        View Profile
      </Button>
    </Paper>
  );
};
