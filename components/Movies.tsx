import React from 'react';
import Link from 'next/link';

import styles from '../styles/Movies.module.scss';

const Movies: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.title}>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="movie-icon" viewBox="0 0 24 24" role="presentation">
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
      </svg>
      <h1>Movies</h1>
    </div>
    <div className={styles.content}>
      <div>
        <Link href="/movies/top/rated">
          <a className={styles.card}>Top Rated</a>
        </Link>
        <Link href="/movies/top/grossing">
          <a className={styles.card}>Top Grossing</a>
        </Link>
        <Link href="/movies/genre">
          <a className={styles.card}>By Genre</a>
        </Link>
      </div>
    </div>
  </div>
);

export default Movies;
