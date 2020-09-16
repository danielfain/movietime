import React from 'react';

import styles from '../styles/Trending.module.css';

export type TrendingMedia = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  original_name: string;
};

type TrendingProps = {
  results: Array<TrendingMedia>;
};

const Trending: React.FC<TrendingProps> = ({ results }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Trending</h1>
    <div className={styles.content}>
      <ul className={styles.list}>
        {results.map(item => (
          <li key={item.id} className={styles.item}>
            <div className={styles.image}>
              <img src={'https://image.tmdb.org/t/p/w92' + item.poster_path}  alt={item.title} />
            </div>
            <div className={styles.labels}>
              <label style={{ color: 'azure' }}>{item.title}</label>
              <label style={{ color: 'gold' }}>{item.vote_average} / 10</label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Trending;
