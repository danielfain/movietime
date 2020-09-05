import React from 'react';

import styles from '../styles/Trending.module.css';

const POSTER_URL = process.env.REACT_APP_TRENDING_POSTER_URL;

export type TrendingMedia = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

type TrendingProps = {
  results: Array<TrendingMedia>;
};

const Trending: React.FC<TrendingProps> = ({ results }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Trending</h1>
    <div className={styles.content}>
      <ul className={styles.list}>
        {results.map((item, index) => (
          <li key={item.id} className={styles.item}>
            <img src={POSTER_URL + item.poster_path}  alt={item.title} />
            <div className={styles.labels}>
              <label style={{ color: 'azure' }}>{index + 1}</label>
              <label style={{ color: 'gold' }}>{item.vote_average} / 10</label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Trending;
