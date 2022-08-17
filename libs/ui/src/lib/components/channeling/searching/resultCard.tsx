import { FC } from 'react';
import {
  Card,
  Text,
  Group,
  createStyles,
  Center,
  Button,
  Avatar,
} from '@mantine/core';
import { Clock, Users } from 'tabler-icons-react';

interface ResultCardProps {
  name: string;
  specialization: string;
  patientCount: number;
  time: number;
  fee: number;
}

export interface ResultDetailsProps {
  data: ResultCardProps[];
}

export const ResultCard: FC<ResultDetailsProps> = ({ data }) => {
  const useStyles = createStyles((theme) => ({
    card: {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    imageSection: {
      padding: theme.spacing.md,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
    },

    label: {
      marginBottom: theme.spacing.xs,
      lineHeight: 1,
      fontWeight: 700,
      fontSize: theme.fontSizes.xs,
      letterSpacing: -0.25,
      textTransform: 'uppercase',
    },

    section: {
      padding: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
    },

    icon: {
      marginRight: 5,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[2]
          : theme.colors.gray[5],
    },
  }));
  const { classes } = useStyles();
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group position="apart" mt="md">
        <div>
          <Text weight={500}>{data[0].name}</Text>
          <Group>
            <Text size="sm" color="dimmed">
              {data[0].specialization}
            </Text>
          </Group>
        </div>
        <Avatar size="lg" />
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text size="sm" color="dimmed" className={classes.label}>
          Session Details
        </Text>

        <Group spacing={8} mb={-8}>
          <Center>
            <Users size={18} className={classes.icon} />
            <Text size="xs">{data[0].patientCount}</Text>
            <Clock size={18} className={classes.icon} />
            <Text size="xs">{data[0].time}</Text>
          </Center>
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text size="md" weight={700} sx={{ lineHeight: 1 }}>
              {data[0].fee}
            </Text>
            <Text
              size="sm"
              color="dimmed"
              weight={500}
              sx={{ lineHeight: 1 }}
              mt={3}
            >
              Channel Fee
            </Text>
          </div>

          <Button radius="md" size="md" style={{ flex: 1 }}>
            Book Now
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
};
