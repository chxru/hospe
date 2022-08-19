import { FC, ReactNode, useState } from 'react';
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

const Logo = ({ width }: { width: number }) => (
  <Text size="lg" weight="bold" color="gray.500">
    Hospe
  </Text>
  // <svg width={width} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 623 163">
  //   <g fill="none" fillRule="evenodd">
  //     <path
  //       fill="#339AF0"
  //       fillRule="nonzero"
  //       d="M162.162 81.5c0-45.011-36.301-81.5-81.08-81.5C36.301 0 0 36.489 0 81.5 0 126.51 36.301 163 81.081 163s81.081-36.49 81.081-81.5z"
  //     />
  //     <g fill="#FFF">
  //       <path
  //         fillRule="nonzero"
  //         d="M65.983 43.049a6.234 6.234 0 00-.336 6.884 6.14 6.14 0 001.618 1.786c9.444 7.036 14.866 17.794 14.866 29.52 0 11.726-5.422 22.484-14.866 29.52a6.142 6.142 0 00-1.616 1.786 6.211 6.211 0 00-.694 4.693c.197.79.546 1.533 1.028 2.186a6.154 6.154 0 008.634 1.284 50.112 50.112 0 007.947-7.39h17.493c3.406 0 6.174-2.772 6.174-6.194s-2.762-6.194-6.174-6.194h-9.655a49.166 49.166 0 004.071-19.69 49.166 49.166 0 00-4.07-19.692h9.66c3.406 0 6.173-2.771 6.173-6.194 0-3.422-2.762-6.193-6.173-6.193H82.574a50.11 50.11 0 00-7.952-7.397 6.149 6.149 0 00-4.578-1.153 6.189 6.189 0 00-4.055 2.438h-.006z"
  //       />
  //       <path d="M56.236 79.391a9.342 9.342 0 01.632-3.608 9.261 9.261 0 011.967-3.077 9.143 9.143 0 012.994-2.063 9.06 9.06 0 017.103 0 9.144 9.144 0 012.995 2.063 9.261 9.261 0 011.967 3.077 9.34 9.34 0 01.63 3.608 9.299 9.299 0 01-2.755 6.395 9.094 9.094 0 01-6.388 2.63 9.094 9.094 0 01-6.39-2.63 9.299 9.299 0 01-2.755-6.395z" />
  //     </g>
  //   </g>
  // </svg>
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
  title: string;
  username: string;
  email: string;
  data: LinksGroupProps[];
  children: ReactNode;
}

export const Sidebar: FC<SiderbarProps> = ({
  title,
  username,
  email,
  data,
  children,
}) => {
  const { classes } = useStyles();
  const links = data.map((item) => <LinksGroup {...item} key={item.label} />);

  const [opened, setOpened] = useState(false);

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
                <Avatar
                  src={
                    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80'
                  }
                  radius="xl"
                />

                <div style={{ flex: 1 }}>
                  <Text size="sm" weight={500}>
                    {username}
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
