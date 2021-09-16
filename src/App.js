import './App.css';
import React, { useCallback, useRef, useState } from 'react';
import produce from 'immer';
import Home from './home';
import About from './About';
import { Route, Link } from 'react-router-dom';
import Profile from './Profile';

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
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path="/About" component={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
};

export default App;
