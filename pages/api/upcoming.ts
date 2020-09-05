import { NextApiRequest, NextApiResponse } from 'next';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

type UpcomingMedia = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

type UpcomingAPIResponse = {
  results: Array<UpcomingMedia>;
};

function sortReleaseDates(unsortedMedia: Array<UpcomingMedia>): void {
  unsortedMedia.sort((a, b) => {
    const aDate = new Date(a.release_date);
    const bDate = new Date(b.release_date);
    return aDate.getTime() - bDate.getTime();
  });
}

export async function getUpcoming() {
  let results: Array<UpcomingMedia> = [];

  await fetch(`${API_URL}/movie/upcoming?api_key=${API_KEY}`)
    .then(res => res.json())
    .then((data: UpcomingAPIResponse) => {
      results = data.results.slice(0, 5);
      sortReleaseDates(results);
    })
    .catch(error => {
      console.log(error);
    });

  return results;
}

const upcoming = async (req: NextApiRequest, res: NextApiResponse<UpcomingAPIResponse>) => {
  const results: Array<UpcomingMedia> = await getUpcoming();
  res.status(200).json({ results });
};

export default upcoming;
