import React from 'react';
import Trending from './Trending';
import Title from "./Title";
import InTheaters from "./InTheaters";

import './Layout.css';

const Layout: React.FunctionComponent = () => (
  <div className="grid-container">
    <Title />
    <Trending />
    <InTheaters />
  </div>
);

export default Layout;