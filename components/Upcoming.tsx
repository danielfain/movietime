import React from 'react';

import styles from '../styles/Upcoming.module.css';

export type UpcomingMedia = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

type UpcomingProps = {
  results: Array<UpcomingMedia>;
};

const Upcoming: React.FC<UpcomingProps> = ({ results }) => (
  <div className={styles.container}>
    <h1 className={styles.title}>Upcoming</h1>
    <div className={styles.content}>
      <ul className={styles.list}>
        {results.map(item => (
          <li key={item.id} className={styles.item}>
            <div className={styles.image}>
              <img src={'https://image.tmdb.org/t/p/w92' + item.poster_path} alt={item.title} />
            </div>
            <div className={styles.labels}>
              <label style={{ color: 'azure' }}>{item.title}</label>
              <label style={{ color: 'gold' }}>{new Date(item.release_date).toDateString().slice(4, 10)}</label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Upcoming;
