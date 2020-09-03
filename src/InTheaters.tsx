import React from 'react';

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

type InTheatersState = {
  media: Array<InTheatersMedia>;
};

type InTheatersProps = {};

class InTheaters extends React.Component<InTheatersProps, InTheatersState> {
  constructor(props: InTheatersProps) {
    super(props);
    this.state = {
      media: [],
    }
  }

  componentDidMount(): void {
    fetch(`${API_URL}/movie/now_playing?api_key=${API_KEY}`)
      .then(res => res.json())
      .then((data: InTheatersAPIResponse) => {
        let results: Array<InTheatersMedia> = data.results;
        results = results.slice(0, 8);
        this.setState({ media: results } );
      })
      .catch(error => console.error(error));
  }

  render(): JSX.Element {
    return (
      <div className="in-theaters-container">
        <h1>In Theaters</h1>
        <div className="poster-container">
          {this.state.media.map(item => (
            <img src={POSTER_URL + item.poster_path}  alt={item.title} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default InTheaters;