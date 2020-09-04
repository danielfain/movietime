import React, { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const POSTER_URL = process.env.REACT_APP_TRENDING_POSTER_URL;

type UpcomingMedia = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

type UpcomingAPIResponse = {
  results: Array<UpcomingMedia>;
};

const Upcoming: React.FunctionComponent = () => {
  const [media, setMedia] = useState<Array<UpcomingMedia>>([]);

  useEffect(() => {
    fetch(`${API_URL}/movie/upcoming?api_key=${API_KEY}`)
      .then(res => res.json())
      .then((data: UpcomingAPIResponse) => {
        let results: Array<UpcomingMedia> = data.results;
        results = results.slice(0, 5);
        sortReleaseDates(results);
        setMedia(results);
      })
      .catch(error => console.error(error));
  });

  function sortReleaseDates(unsortedMedia: Array<UpcomingMedia>): void {
    unsortedMedia.sort((a, b) => {
      const aDate = new Date(a.release_date);
      const bDate = new Date(b.release_date);
      return aDate.getTime() - bDate.getTime();
    });
  }

  return (
    <div className="upcoming-container">
      <h1>Upcoming</h1>
      <div className="upcoming-content">
        <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
          {media.map(item => (
            <li key={item.id}>
              <img src={POSTER_URL + item.poster_path}  alt={item.title} />
              <div className="upcoming-labels">
                <label style={{ color: "azure" }}>{item.title}</label>
                <label style={{ color: "gold" }}>{new Date(item.release_date).toDateString().slice(4, 10)}</label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Upcoming;