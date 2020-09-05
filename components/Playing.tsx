import React from 'react';

import styles from '../styles/Playing.module.css';

const POSTER_URL = process.env.REACT_APP_IN_THEATERS_POSTER_URL;

export type PlayingMedia = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

type PlayingProps = {
  results: Array<PlayingMedia>;
};

const Playing: React.FC<PlayingProps> = ({ results }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>In Theaters</h1>
      <div className={styles.posters}>
        {results.map(item => (
          <img src={POSTER_URL + item.poster_path}  alt={item.title} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Playing;
