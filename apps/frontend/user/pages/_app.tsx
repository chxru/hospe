import { useEffect, useRef } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { MantineProvider } from '@mantine/core';

import { initFirebase } from 'firebase-web';
import type { FirebaseOptions } from 'firebase/app';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const firebaseConfig = useRef<FirebaseOptions>({
    apiKey: 'AIzaSyB4q3Wq7r9mLfVmPVEYfqcCdBMLMqFrx5o',
    authDomain: 'hospe-9ca9e.firebaseapp.com',
    projectId: 'hospe-9ca9e',
    storageBucket: 'hospe-9ca9e.appspot.com',
    messagingSenderId: '1072809987003',
    appId: '1:1072809987003:web:741a372f5879a5a39d529e',
  });

  useEffect(() => {
    initFirebase(firebaseConfig.current);
  }, []);

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
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
