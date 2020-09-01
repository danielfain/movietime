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

class TrendingContainer extends Component<TrendingProps, TrendingState> {
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
        const { results } = data;
        this.setState({ media: results } );
      })
  }

  render() {
    return (
      <ul>
        {this.state.media.map(item => (
          <li>
            {item.title}
            <img src={process.env.REACT_APP_IMAGE_URL + item.poster_path}  alt="Poster" />
          </li>
        ))}
      </ul>
    );
  }
}

export default TrendingContainer;