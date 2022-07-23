import { FC } from 'react';
import { Card, Text, Group, createStyles, Center } from '@mantine/core';
import { Clock } from 'tabler-icons-react';

export interface CardProps {
  label_name?: string;
  lable_gend?: string;
  label_time?: string;
}

interface ChannelDetailCardProps {
  patient_data: CardProps[];
}

export const ChannelDetailCard: FC<ChannelDetailCardProps> = ({
  patient_data,
}) => {
  const useStyles = createStyles((theme) => ({
    card: {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
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
      borderLeft: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
    },
  }));
  const { classes } = useStyles();
  const name = patient_data.map((feature) => (
    <Text size="lg">{feature.label_name}</Text>
  ));
  const gend = patient_data.map((feature) => (
    <Text size="sm" color="dimmed">
      {feature.lable_gend}
    </Text>
  ));

  const time = patient_data.map((feature) => (
    <Text size="md" ml="sm">
      {feature.label_time}
    </Text>
  ));
  return (
    <Card withBorder radius="md" shadow="sm" mb={'xs'}>
      <Group position="apart">
        <div>
          {name}
          <Group>{gend}</Group>
        </div>
        <div>
          <Center>
            <Clock />
            {time}
          </Center>
        </div>
        <Card.Section className={classes.section}> 01 </Card.Section>
      </Group>
    </Card>
  );
};
