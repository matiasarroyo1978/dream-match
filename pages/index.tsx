import React from 'react';
import Head from 'next/head';
import Header from '../app/components/Header';
import Welcome from '../app/components/Welcome';
import TeamList from '../app/components/TeamList';
import TeamCreate from '../app/components/TeamCreate';
import "../styles/globals.css";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>ATC Dream Match</title>
        <meta name="description" content="Create your dream football match" />
      </Head>
      <Header />
      <Welcome />
      <div className="container mx-auto p-4">
        <TeamCreate />
        <TeamList />
      </div>
    </div>
  );
}

export default Home;

