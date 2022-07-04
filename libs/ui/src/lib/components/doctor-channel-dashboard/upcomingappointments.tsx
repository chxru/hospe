import { Card, Text, Group, createStyles, MediaQuery } from '@mantine/core';
import { Clock, CalendarEvent, Users, Location } from 'tabler-icons-react';

const mockdata_time = [
  { label: '2022/05/02', icon: CalendarEvent },
  { label: '16.30', icon: Clock },
];
const mockdata_lable = [{ label: 'Active Patients' }];
const mockdata_patients = [{ label: '10', icon: Users }];

const mockdata_location = [{ label: 'Room Number' }];
const mockdata_room = [{ label: '06', icon: Location }];

export const UpcommingAppointmentCard = ({ ...props }) => {
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
  const feature_activeNo = mockdata_lable.map((feature) => (
    <Text size="md">{feature.label}</Text>
  ));

  const features = mockdata_time.map((feature) => (
    <Group key={feature.label} mt="xs">
      <feature.icon size={20} />
      <Text size="md" ml="xs">
        {feature.label}
      </Text>
    </Group>
  ));

  const feature_active = mockdata_patients.map((feature) => (
    <Group key={feature.label} mt="xs">
      <feature.icon size={20} />
      <Text size="md" ml="xs">
        {feature.label}
      </Text>
    </Group>
  ));

  const feature_location = mockdata_location.map((feature) => (
    <Text size="sm">{feature.label}</Text>
  ));
  const feature_room = mockdata_room.map((feature) => (
    <Group key={feature.label} mt="xs">
      <feature.icon size={20} />
      <Text size="md" ml="xs">
        {feature.label}
      </Text>
    </Group>
  ));

  return (
    <Card withBorder radius="md" shadow="sm" m={'xs'}>
      <Group position="apart" mt="xs">
        <div>{features}</div>
        <div>
          {feature_activeNo}
          {feature_active}
        </div>
        <MediaQuery smallerThan={'md'} styles={{ display: 'none' }}>
          <Card.Section className={classes.section}>
            {feature_location}
            {feature_room}
          </Card.Section>
        </MediaQuery>
        <MediaQuery largerThan={'md'} styles={{ display: 'none' }}>
          <div>
            {feature_location}
            {feature_room}
          </div>
        </MediaQuery>
      </Group>
    </Card>
  );
};
