import { FC, useState } from 'react';
import {
  Navbar,
  Group,
  ScrollArea,
  createStyles,
  Avatar,
  Text,
  MediaQuery,
  Burger,
  AppShell,
  Header,
} from '@mantine/core';
import { LinksGroup, LinksGroupProps } from './linkGroup';
import { ChevronRight } from 'tabler-icons-react';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { useAuthStore } from '@hospe/next';

const Logo = ({ width }: { width: number }) => (
  <Text size="lg" weight="bold" color="gray.500">
    Hospe
  </Text>
);

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

interface SiderbarProps {
  data: LinksGroupProps[];
  children: JSX.Element;
}

export const Sidebar: FC<SiderbarProps> = ({ data, children }) => {
  const { isAuthenticated, displayName, email } = useAuthStore();
  const { classes } = useStyles();
  const links = data.map((item) => <LinksGroup {...item} key={item.label} />);

  const [opened, setOpened] = useState(false);

  if (!isAuthenticated) {
    return children;
  }

  return (
    <div style={{ height: '100%' }}>
      <AppShell
        navbarOffsetBreakpoint="sm"
        fixed={true}
        padding="md"
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ xs: 250 }}
            className={classes.navbar}
          >
            <Navbar.Section
              grow
              component={ScrollArea}
              className={classes.links}
              mx="-xs"
              px="xs"
            >
              <div className={classes.linksInner}>{links}</div>
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
              <Group>
                {/* TODO: Change Avatar */}
                <Avatar
                  src={
                    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80'
                  }
                  radius="xl"
                />

                <div style={{ flex: 1 }}>
                  <Text size="sm" weight={500}>
                    {displayName}
                  </Text>

                  <Text color="dimmed" size="xs">
                    {email}
                  </Text>
                </div>

                <ChevronRight size={14} />
              </Group>
            </Navbar.Section>
          </Navbar>
        }
        header={
          <Header height={50} p="md">
            <div
              style={{ display: 'flex', alignItems: 'center', height: '100%' }}
            >
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  mr="xl"
                />
              </MediaQuery>

              <Group position="apart">
                <Logo width={120} />
              </Group>
            </div>
          </Header>
        }
      >
        {children}
      </AppShell>
    </div>
  );
};
