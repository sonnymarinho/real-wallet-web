import React from 'react';

import Head from 'next/head';
import type { NextPage } from 'next';
import { SignIn } from './signin';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Real Wallet</title>
      <meta name="description" content="Real Wallet App" />
    </Head>
    <SignIn />
  </>
);

export default Home;
