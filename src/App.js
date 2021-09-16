import './App.css';
import React, { useCallback, useRef, useState } from 'react';
import produce from 'immer';
import Home from './home';
import About from './About';
import { Route, Link, Switch } from 'react-router-dom';
import Profile from './Profile';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/About">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예시</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/About" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          render={({ location }) => (
            <div>
              <h2>not found</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
