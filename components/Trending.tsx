import React from 'react';

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
  <div className="trending-container">
    <h1>Trending</h1>
    <div className="trending-content">
      <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
        {results.map((item, index) => (
          <li key={item.id}>
            <img src={POSTER_URL + item.poster_path}  alt={item.title} />
            <div className="trending-labels">
              <label style={{ color: "azure" }}>{index + 1}</label>
              <label style={{ color: "gold" }}>{item.vote_average} / 10</label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Trending;