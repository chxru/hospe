import { FC } from 'React';
import { Text, Button, Avatar, Paper } from '@mantine/core';

interface ProfileCardProps {
  name: string;
  specialization: string;
}

export interface DoctorDetailsProps {
  data: ProfileCardProps[];
}

export const ProfileCard: FC<DoctorDetailsProps> = ({ data }) => {
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
        {data[0].name}
      </Text>
      <Text align="center" color="dimmed" size="sm">
        {data[0].specialization}
      </Text>
      <Button variant="light" radius="md" size="md" fullWidth mt="md">
        View Profile
      </Button>
    </Paper>
  );
};
