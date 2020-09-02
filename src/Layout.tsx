import React from 'react';
import Trending from './Trending';
import Title from "./Title";
import InTheaters from "./InTheaters";
import Upcoming from "./Upcoming";

import './Layout.css';

const Layout: React.FunctionComponent = () => (
  <div className="grid-container">
    <Title />
    <Trending />
    <InTheaters />
    <Upcoming />
  </div>
);

export default Layout;