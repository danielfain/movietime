import { NextApiRequest, NextApiResponse } from 'next';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

type TrendingMedia = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
};

type TrendingAPIResponse = {
  results: Array<TrendingMedia>;
};

export async function getTrending() {
  let results: Array<TrendingMedia> = [];

  await fetch(`${API_URL}/trending/all/day?api_key=${API_KEY}`)
    .then(res => res.json())
    .then((data: TrendingAPIResponse) => {
      results = data.results.slice(0, 5);
    })
    .catch(error => {
      console.log(error);
    });

  return results;
}

const trending = async (req: NextApiRequest, res: NextApiResponse<TrendingAPIResponse>) => {
  const results: Array<TrendingMedia> = await getTrending();
  res.status(200).json({ results });
};

export default trending;
