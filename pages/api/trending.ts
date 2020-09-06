import { NextApiRequest, NextApiResponse } from 'next';

import type { TrendingMedia } from '../../components/Trending';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

type TrendingAPIResponse = {
  results: Array<TrendingMedia>;
};

export async function getTrending(): Promise<Array<TrendingMedia>> {
  let results: Array<TrendingMedia> = [];

  await fetch(`${API_URL}/trending/all/day?api_key=${API_KEY}`)
    .then(res => res.json())
    .then((data: TrendingAPIResponse) => {
      results = data.results.slice(0, 5);
      results.forEach(media => {
        if (!media.title) {
          media.title = media.original_name;
        }
      });
    })
    .catch(error => {
      console.log(error);
    });

  return results;
}

const trending = async (req: NextApiRequest, res: NextApiResponse<TrendingAPIResponse>): Promise<void> => {
  const results: Array<TrendingMedia> = await getTrending();
  res.status(200).json({ results });
};

export default trending;
