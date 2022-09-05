import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps } from 'next/app';

import 'styles/globals.css';
import 'locales';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>
);

export default MyApp;
