import React, { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const POSTER_URL = process.env.REACT_APP_TRENDING_POSTER_URL;

type TrendingMedia = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

type TrendingAPIResponse = {
  results: Array<TrendingMedia>;
};

const Trending: React.FunctionComponent = () => {
  const [media, setMedia] = useState<Array<TrendingMedia>>([]);

  useEffect(() => {
    fetch(`${API_URL}/trending/all/day?api_key=${API_KEY}`)
      .then(res => res.json())
      .then((data: TrendingAPIResponse) => {
        let results: Array<TrendingMedia> = data.results;
        results = results.slice(0, 5);
        setMedia(results);
      })
      .catch(error => console.error(error));
  });

  return (
    <div className="trending-container">
      <h1>Trending</h1>
      <div className="trending-content">
        <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
          {media.map((item, index) => (
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
};

export default Trending;