import { Api, useAuthStore } from '@hospe/next';
import { SidebarProps } from '@hospe/types';
import { AuthScreen, Sidebar, SplashScreen } from '@hospe/ui';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useCallback, useEffect } from 'react';
import { Adjustments, Gauge, MedicalCross } from 'tabler-icons-react';
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

  const sidebarData: SidebarProps = {
    data: [
      { label: 'Dashboard', icon: Gauge, link: '/' },
      {
        label: 'Doctors',
        icon: MedicalCross,
        initiallyOpened: true,
        links: [
          { label: 'Add new doctor', link: '/doctor/new' },
          { label: 'Manage Specializations', link: '/doctor/specializes' },
        ],
      },
      { label: 'Settings', icon: Adjustments },
    ],
    children: undefined,
  };

  if (isLoading) return <SplashScreen />;
  if (!isAuthenticated) return <AuthScreen role="user" />;

  return (
    <>
      <Head>
        <title>Hospe :: Management</title>
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
        }}
      >
        <NotificationsProvider>
          <Sidebar {...sidebarData}>
            <Component {...pageProps} />
          </Sidebar>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}

export default CustomApp;
