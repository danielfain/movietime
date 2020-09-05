import { NextApiRequest, NextApiResponse } from 'next';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

type PlayingMedia = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

type PlayingAPIResponse = {
  results: Array<PlayingMedia>;
};

export async function getPlaying() {
  let results: Array<PlayingMedia> = [];

  await fetch(`${API_URL}/movie/now_playing?api_key=${API_KEY}`)
    .then(res => res.json())
    .then((data: PlayingAPIResponse) => {
      results = data.results.slice(0, 8);
    })
    .catch(error => {
      console.log(error);
    });

  return results;
}

const playing = async (req: NextApiRequest, res: NextApiResponse<PlayingAPIResponse>) => {
  const results: Array<PlayingMedia> = await getPlaying();
  res.status(200).json({ results });
}

export default playing;
