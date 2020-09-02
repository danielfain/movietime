import React from 'react';
import Trending from './Trending';
import Title from "./Title";

import './Layout.css';

const Layout: React.FunctionComponent = () => (
  <div className="grid-container">
    <Title />
    <Trending />
  </div>
);

export default Layout;