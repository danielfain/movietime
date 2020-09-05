import { NextApiRequest, NextApiResponse } from 'next';

import type { PlayingMedia } from '../../components/Playing';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

type PlayingAPIResponse = {
  results: Array<PlayingMedia>;
};

export async function getPlaying(): Promise<Array<PlayingMedia>> {
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

const playing = async (req: NextApiRequest, res: NextApiResponse<PlayingAPIResponse>): Promise<void> => {
  const results: Array<PlayingMedia> = await getPlaying();
  res.status(200).json({ results });
};

export default playing;
