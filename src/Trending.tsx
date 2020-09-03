import React from 'react';

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

type TrendingState = {
  media: Array<TrendingMedia>;
};

type TrendingProps = {};

class Trending extends React.Component<TrendingProps, TrendingState> {
  constructor(props: TrendingProps) {
    super(props);
    this.state = {
      media: [],
    }
  }

  componentDidMount(): void {
    fetch(`${API_URL}/trending/all/day?api_key=${API_KEY}`)
      .then(res => res.json())
      .then((data: TrendingAPIResponse) => {
        let results: Array<TrendingMedia> = data.results;
        results = results.slice(0, 5);
        this.setState({ media: results } );
      })
      .catch(error => console.error(error));
  }

  render(): JSX.Element {
    return (
      <div className="trending-container">
        <h1>Trending</h1>
        <div className="trending-content">
          <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
            {this.state.media.map((item, index) => (
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
  }
}

export default Trending;