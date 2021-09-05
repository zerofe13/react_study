import './App.css';
import React, { Component, useState } from 'react';
import Counter from './Counter';
import Info from './info';

const App = () => {
  const [visible, setVisibel] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisibel(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

export default App;
