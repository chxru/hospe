import { AppProps } from 'next/app';
import Head from 'next/head';
import {
  Gauge,
  Notes,
  CalendarStats,
  PresentationAnalytics,
  FileAnalytics,
  Adjustments,
  Lock,
} from 'tabler-icons-react';
import { MantineProvider, Title, Group } from '@mantine/core';
import { Sidebar } from '@hospe/ui';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const mockData = {
    title: 'Mantine',
    username: 'John Doe',
    email: 'john@gmail.com',
    data: [
      { label: 'Dashboard', icon: Gauge },
      {
        label: 'Create Session',
        icon: Notes,
        initiallyOpened: true,
        links: [
          { label: 'Overview', link: '/' },
          { label: 'Forecasts', link: '/' },
          { label: 'Outlook', link: '/' },
          { label: 'Real time', link: '/' },
        ],
      },
      {
        label: 'Appointments',
        icon: CalendarStats,
        links: [
          { label: 'Upcoming releases', link: '/' },
          { label: 'Previous releases', link: '/' },
          { label: 'Releases schedule', link: '/' },
        ],
      },
      { label: 'Analytics', icon: PresentationAnalytics },
      { label: 'Contracts', icon: FileAnalytics },
      { label: 'Settings', icon: Adjustments },
      {
        label: 'Security',
        icon: Lock,
        links: [
          { label: 'Enable 2FA', link: '/' },
          { label: 'Change password', link: '/' },
          { label: 'Recovery codes', link: '/' },
        ],
      },
    ],
    children: undefined,
  };

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Sidebar {...mockData}>
          <Component {...pageProps} />
        </Sidebar>
      </MantineProvider>
    </>
  );
}
