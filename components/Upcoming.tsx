import React from 'react';

const POSTER_URL = process.env.REACT_APP_TRENDING_POSTER_URL;

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
  <div className="upcoming-container">
    <h1>Upcoming</h1>
    <div className="upcoming-content">
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        {results.map(item => (
          <li key={item.id}>
            <img src={POSTER_URL + item.poster_path}  alt={item.title} />
            <div className="upcoming-labels">
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
