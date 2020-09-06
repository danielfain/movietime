import { NextApiRequest, NextApiResponse } from 'next';

import { TopRatedMedia } from '../../movies/top/rated';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

type TopRatedAPIResponse = {
  results: Array<TopRatedMedia>;
};

export async function getTopRated(type: string | string[]): Promise<Array<TopRatedMedia>> {
  let results: Array<TopRatedMedia> = [];

  await fetch(`${API_URL}/${type}/top_rated?api_key=${API_KEY}&language=en-US`)
    .then(res => res.json())
    .then((data: TopRatedAPIResponse) => {
      results = data.results;
    })
    .catch(error => console.log(error));

  return results;
}

const rated = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { type } = req.query;
  const results: Array<TopRatedMedia> = await getTopRated(type);
  res.status(200).json({ results });
};

export default rated;
