import React from 'react';
import type { AppProps } from 'next/app';

import 'tailwindcss/tailwind.css';
import { toast, ToastContainer } from 'react-toastify';
import { ApolloClient, ApolloProvider, concat, HttpLink, InMemoryCache } from '@apollo/client';

import 'react-toastify/dist/ReactToastify.css';
import { setContext } from '@apollo/client/link/context';
import { STORAGE_KEY } from '../config/constants';
import { AuthProvider } from '../hooks/auth';

const BASE_URL = process.env.BACKEND_BASE_URL || 'http://localhost:3001';

function MyApp({ Component, pageProps }: AppProps) {
  const httpLink = new HttpLink({ uri: `${BASE_URL}/graphql` });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(STORAGE_KEY.TOKEN);

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authLink, httpLink),
  });

  return (
    <ApolloProvider client={client}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
}
export default MyApp;
