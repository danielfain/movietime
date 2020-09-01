import React, { Component } from 'react';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

type TrendingAPIResult = {
  title: string;
  poster_path: string;
  vote_average: number;
}

type TrendingState = {
  media: Array<TrendingAPIResult>;
}

type TrendingProps = {}

class Trending extends Component<TrendingProps, TrendingState> {
  constructor(props: TrendingProps) {
    super(props);
    this.state = {
      media: [],
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/trending/all/week?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        let { results } = data;
        results = results.slice(0, 5);
        this.setState({ media: results } );
      })
  }

  render() {
    return (
      <ul>
        {this.state.media.map(item => (
          <li>
            <img src={process.env.REACT_APP_POSTER_URL + item.poster_path}  alt={item.title} />
          </li>
        ))}
      </ul>
    );
  }
}

export default Trending;