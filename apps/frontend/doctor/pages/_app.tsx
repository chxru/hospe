import { Api, useAuthStore } from '@hospe/next';
import { SidebarProps } from '@hospe/types';
import { AuthScreen, Sidebar, SplashScreen } from '@hospe/ui';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import {
  Gauge,
  CalendarStats,
  Adjustments,
  PlaylistAdd,
} from 'tabler-icons-react';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const {
    accessToken,
    isLoading,
    isAuthenticated,
    toggleLoading,
    updateToken,
  } = useAuthStore();

  const [skipAuth, setSkipAuth] = useState(false);

  const RefreshToken = useCallback(async () => {
    const data = await Api.Auth.RefreshToken();
    if (data) {
      updateToken(data);
    }
    toggleLoading();
  }, [updateToken, toggleLoading]);

  useEffect(() => {
    const href = window.location.href.split('/');
    const path = href[href.length - 1];

    setSkipAuth(path.startsWith('auth') && path.split('?')[0].length == 4);
  }, []);

  useEffect(() => {
    if (accessToken && skipAuth) {
      setSkipAuth(false);
    }
  }, [accessToken, skipAuth]);

  useEffect(() => {
    if (isLoading && !isAuthenticated) {
      RefreshToken();
    }
  }, [isLoading, isAuthenticated, RefreshToken]);

  const sidebarData: SidebarProps = {
    data: [
      { label: 'Dashboard', icon: Gauge, link: '/' },
      {
        label: 'Create Session',
        icon: PlaylistAdd,
        link: '/createSession',
      },
      {
        label: 'Appointments',
        icon: CalendarStats,
        links: [
          { label: 'Upcoming Appointments', link: '/' },
          { label: 'Previous Appointments', link: '/' },
        ],
      },
      { label: 'Settings', icon: Adjustments },
    ],
    children: undefined,
  };

  if (isLoading) return <SplashScreen />;
  if (!isAuthenticated && !skipAuth) return <AuthScreen role="doctor" />;

  return (
    <>
      <Head>
        <title>Hospe :: Doctor</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
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
