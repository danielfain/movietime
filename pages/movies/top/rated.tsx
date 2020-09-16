import React from 'react';
import { GetStaticProps } from 'next';

import styles from '../../../styles/MovieTopRated.module.css';
import { getTopRated } from '../../api/top/rated';

const POSTER_URL = process.env.REACT_APP_IN_THEATERS_POSTER_URL || '';

export type TopRatedMedia = {
  id: number;
  title: string;
  name: string;
  poster_path: URL;
  vote_average: number;
  vote_count: number;
}

type TopProps = {
  movies: Array<TopRatedMedia>;
};

const Rated: React.FC<TopProps> = ({ movies }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Top Rated Movies</h1>
    {movies.map(movie => (
      <div key={movie.id} className={styles.poster}>
        <img src={POSTER_URL + movie.poster_path} alt={movie.title} />
        <div className={styles.labels}>
          <label style={{ color: 'azure' }}>{movie.title}</label>
          <label style={{ color: 'gold' }}>{movie.vote_average} / 10</label>
        </div>
      </div>
    ))}
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const movies = await getTopRated('movie');

  return {
    props: {
      movies
    },
    revalidate: 3600
  };
};

export default Rated;
