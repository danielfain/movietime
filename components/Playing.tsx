import React from 'react';

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
    <div className="in-theaters-container">
      <h1>In Theaters</h1>
      <div className="poster-container">
        {results.map(item => (
          <img src={POSTER_URL + item.poster_path}  alt={item.title} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Playing;