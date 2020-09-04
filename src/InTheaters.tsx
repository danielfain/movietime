import React, { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const POSTER_URL = process.env.REACT_APP_IN_THEATERS_POSTER_URL;

type InTheatersMedia = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

type InTheatersAPIResponse = {
  results: Array<InTheatersMedia>;
};

const InTheaters: React.FunctionComponent = () => {
  const [media, setMedia] = useState<Array<InTheatersMedia>>([]);

  useEffect(() => {
    fetch(`${API_URL}/movie/now_playing?api_key=${API_KEY}`)
      .then(res => res.json())
      .then((data: InTheatersAPIResponse) => {
        let results: Array<InTheatersMedia> = data.results;
        results = results.slice(0, 8);
        setMedia(results);
      })
      .catch(error => console.error(error));
  });

  return (
    <div className="in-theaters-container">
      <h1>In Theaters</h1>
      <div className="poster-container">
        {media.map(item => (
          <img src={POSTER_URL + item.poster_path}  alt={item.title} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default InTheaters;