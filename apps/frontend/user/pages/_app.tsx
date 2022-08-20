import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import {
  Gauge,
  CalendarStats,
  Adjustments,
  ReportMedical,
} from 'tabler-icons-react';
import { Sidebar } from '@hospe/ui';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const mockData = {
    title: 'Mantine',
    username: 'John Doe',
    email: 'john@gmail.com',
    data: [
      { label: 'Dashboard', icon: Gauge, link: '/' },
      {
        label: 'Appointments',
        icon: CalendarStats,
        links: [
          { label: 'Upcoming Appointments', link: '/' },
          { label: 'Previous Appointments', link: '/' },
        ],
      },
      {
        label: 'Reports',
        icon: ReportMedical,
      },
      { label: 'Settings', icon: Adjustments },
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
