import { Sidebar } from '@hospe/ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Adjustments, Gauge, PlaylistAdd } from 'tabler-icons-react';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const mockData = {
    title: 'Mantine',
    username: 'John Doe',
    email: 'john@gmail.com',
    data: [
      { label: 'Dashboard', icon: Gauge, link: '/' },
      {
        label: 'Add Doctors',
        icon: PlaylistAdd,
        link: '/doctorRegistration',
      },
      { label: 'Settings', icon: Adjustments },
    ],
    children: undefined,
  };
  return (
    <>
      <Head>
        <title>Welcome to management!</title>
      </Head>
      <main className="app">
        <Sidebar {...mockData}>
          <Component {...pageProps} />
        </Sidebar>
      </main>
    </>
  );
}

export default CustomApp;
