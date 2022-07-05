import { Card, Text, Group, createStyles, Center } from '@mantine/core';
import { Clock } from 'tabler-icons-react';

const mockdata_name = [{ label: 'Danial Smith' }];
const mockdata_gend = [{ label: 'Male' }];
const mockdata = [{ label: '16.30', icon: Clock }];

export const ChannelDetailCard = ({ ...props }) => {
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
  const feature_name = mockdata_name.map((feature) => (
    <Text size="lg">{feature.label}</Text>
  ));
  const feature_gend = mockdata_gend.map((feature) => (
    <Text size="sm" color="dimmed">
      {feature.label}
    </Text>
  ));
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size={20} />
      <Text size="md" ml="sm">
        {feature.label}
      </Text>
    </Center>
  ));
  return (
    <Card withBorder radius="md" shadow="sm" mb={'xs'}>
      <Group position="apart">
        <div>
          {feature_name}
          <Group>{feature_gend}</Group>
        </div>
        <div>{features}</div>
        <Card.Section className={classes.section}> 01 </Card.Section>
      </Group>
    </Card>
  );
};
