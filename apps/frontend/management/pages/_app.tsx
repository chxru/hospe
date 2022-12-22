import { Api, useAuthStore } from '@hospe/next';
import { Sidebar, SplashScreen } from '@hospe/ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useCallback, useEffect } from 'react';
import { Adjustments, Gauge, PlaylistAdd } from 'tabler-icons-react';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const { isLoading, isAuthenticated, toggleLoading, updateToken } =
    useAuthStore();

  const RefreshToken = useCallback(async () => {
    const data = await Api.Auth.RefreshToken();
    if (data) {
      updateToken(data);
    }
    toggleLoading();
  }, [updateToken, toggleLoading]);

  useEffect(() => {
    if (isLoading && !isAuthenticated) {
      RefreshToken();
    }
  }, [isLoading, isAuthenticated, RefreshToken]);

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

      {isLoading ? (
        <SplashScreen />
      ) : (
        <main className="app">
          <Sidebar {...mockData}>
            <Component {...pageProps} />
          </Sidebar>
        </main>
      )}
    </>
  );
}

export default CustomApp;
