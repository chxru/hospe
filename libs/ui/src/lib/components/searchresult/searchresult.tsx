import {
  ActionIcon,
  Container,
  Grid,
  Card,
  Text,
  Group,
  createStyles,
  Center,
  Button,
  Avatar,
  Paper,
} from '@mantine/core';
import { Clock, Users, CurrentLocation } from 'tabler-icons-react';

const mockdata = [
  { label: '4 Active Patients', icon: Users },
  { label: 'Time', icon: Clock },
];

export const Searchresult = ({ ...props }) => {
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
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size={18} className={classes.icon} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Container my="md">
      <Grid>
        <Grid.Col md={4}>
          <Paper
            radius="md"
            shadow="sm"
            withBorder
            p="lg"
            m="xs"
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.white,
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
        </Grid.Col>

        <Grid.Col md={8}>
          <Paper
            radius="md"
            shadow="sm"
            withBorder
            p="lg"
            m="xs"
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.white,
            })}
          >
            <Text>20th May 2022</Text>
            <hr />
            <Grid>
              <Grid.Col md={6}>
                <Card withBorder radius="md" className={classes.card}>
                  <Group position="apart" mt="md">
                    <div>
                      <Text weight={500}>Lanka Hospitals</Text>
                      <Group>
                        <ActionIcon size="xs" color="dimmed">
                          <CurrentLocation />
                        </ActionIcon>
                        <Text size="sm" color="dimmed">
                          Colombo 10
                        </Text>
                      </Group>
                    </div>
                    <Avatar
                      size="lg"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                    />
                  </Group>

                  <Card.Section className={classes.section} mt="md">
                    <Text size="sm" color="dimmed" className={classes.label}>
                      Session Details
                    </Text>

                    <Group spacing={8} mb={-8}>
                      {features}
                    </Group>
                  </Card.Section>

                  <Card.Section className={classes.section}>
                    <Group spacing={30}>
                      <div>
                        <Text size="md" weight={700} sx={{ lineHeight: 1 }}>
                          $168.00
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
              </Grid.Col>
              <Grid.Col md={6}>
                <Card withBorder radius="md" className={classes.card}>
                  <Group position="apart" mt="md">
                    <div>
                      <Text weight={500}>Lanka Hospitals</Text>
                      <Group>
                        <ActionIcon size="xs" color="dimmed">
                          <CurrentLocation />
                        </ActionIcon>
                        <Text size="sm" color="dimmed">
                          Colombo 10
                        </Text>
                      </Group>
                    </div>
                    <Avatar
                      size="lg"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                    />
                  </Group>

                  <Card.Section className={classes.section} mt="md">
                    <Text size="sm" color="dimmed" className={classes.label}>
                      Session Details
                    </Text>

                    <Group spacing={8} mb={-8}>
                      {features}
                    </Group>
                  </Card.Section>

                  <Card.Section className={classes.section}>
                    <Group spacing={30}>
                      <div>
                        <Text size="md" weight={700} sx={{ lineHeight: 1 }}>
                          $168.00
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
              </Grid.Col>
            </Grid>
          </Paper>
          <Paper
            radius="md"
            shadow="sm"
            withBorder
            p="lg"
            m="xs"
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.white,
            })}
          >
            <Text>20th May 2022</Text>
            <hr />
            <Grid>
              <Grid.Col md={6}>
                <Card withBorder radius="md" className={classes.card}>
                  <Group position="apart" mt="md">
                    <div>
                      <Text weight={500}>Lanka Hospitals</Text>
                      <Group>
                        <ActionIcon size="xs" color="dimmed">
                          <CurrentLocation />
                        </ActionIcon>
                        <Text size="sm" color="dimmed">
                          Colombo 10
                        </Text>
                      </Group>
                    </div>
                    <Avatar
                      size="lg"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                    />
                  </Group>

                  <Card.Section className={classes.section} mt="md">
                    <Text size="sm" color="dimmed" className={classes.label}>
                      Session Details
                    </Text>

                    <Group spacing={8} mb={-8}>
                      {features}
                    </Group>
                  </Card.Section>

                  <Card.Section className={classes.section}>
                    <Group spacing={30}>
                      <div>
                        <Text size="md" weight={700} sx={{ lineHeight: 1 }}>
                          $168.00
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
              </Grid.Col>
              <Grid.Col md={6}>
                <Card withBorder radius="md" className={classes.card}>
                  <Group position="apart" mt="md">
                    <div>
                      <Text weight={500}>Lanka Hospitals</Text>
                      <Group>
                        <ActionIcon size="xs" color="dimmed">
                          <CurrentLocation />
                        </ActionIcon>
                        <Text size="sm" color="dimmed">
                          Colombo 10
                        </Text>
                      </Group>
                    </div>
                    <Avatar
                      size="lg"
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                    />
                  </Group>

                  <Card.Section className={classes.section} mt="md">
                    <Text size="sm" color="dimmed" className={classes.label}>
                      Session Details
                    </Text>

                    <Group spacing={8} mb={-8}>
                      {features}
                    </Group>
                  </Card.Section>

                  <Card.Section className={classes.section}>
                    <Group spacing={30}>
                      <div>
                        <Text size="md" weight={700} sx={{ lineHeight: 1 }}>
                          $168.00
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
              </Grid.Col>
            </Grid>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
};
