import Head from 'next/head'
import Title from '../components/Title';
import Trending from '../components/Trending';
import InTheaters from '../components/InTheaters';
import Upcoming from '../components/Upcoming';
import Movies from '../components/Movies'
import Shows from '../components/Shows';

const Home = () => {
  return (
    <div className="grid-container">
      <Title />
      <Trending />
      <InTheaters />
      <Upcoming />
      <Movies />
      <Shows />
    </div>
  );
};

export default Home;