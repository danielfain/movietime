import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Trending from './Trending';
import Title from "./Title";
import InTheaters from "./InTheaters";
import Upcoming from "./Upcoming";
import Movie from "./Movie";
import TV from './TV';

import './Layout.css';

const Layout: React.FunctionComponent = () => (
  <div className="grid-container">
    <Switch>
      <Route exact path="/">
        <Title />
        <Trending />
        <InTheaters />
        <Upcoming />
        <Movie />
        <TV />
      </Route>
    </Switch>
  </div>
);

export default Layout;