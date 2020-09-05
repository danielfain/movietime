import Head from 'next/head';
import React from 'react';
import { GetStaticProps } from 'next';

import Title from '../components/Title';
import Upcoming from '../components/Upcoming';
import Shows from '../components/Shows';
import Trending from '../components/Trending';
import Movies from '../components/Movies';
import Playing from '../components/Playing';

import type { TrendingMedia } from '../components/Trending';
import type { UpcomingMedia } from '../components/Upcoming';
import type { PlayingMedia } from '../components/Playing';

import { getTrending } from './api/trending';
import { getPlaying } from './api/playing';
import { getUpcoming } from './api/upcoming';

type HomeProps = {
  trending: Array<TrendingMedia>;
  upcoming: Array<UpcomingMedia>;
  playing: Array<PlayingMedia>;
};

const Home: React.FC<HomeProps> = ({ trending, upcoming, playing }) => {
  return (
    <div>
      <Head>
        <title>Movie Time</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <div className="grid-container">
        <Title />
        <Trending results={trending} />
        <Playing results={playing} />
        <Upcoming results={upcoming} />
        <Movies />
        <Shows />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const trending = await getTrending();
  const upcoming = await getUpcoming();
  const playing = await getPlaying();

  return {
    props: {
      trending,
      upcoming,
      playing
    },
    revalidate: 3600
  };
};

export default Home;
