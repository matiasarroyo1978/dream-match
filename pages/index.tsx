// app/pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Header from '../app/components/Header';
import Welcome from '../app/components/Welcome';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>ATC Dream Match</title>
        <meta name="description" content="Create your dream football match!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <Welcome />
      </main>
    </div>
  );
};

export default Home;
