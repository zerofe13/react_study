import './App.css';
import React, { useDebugValue } from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
import Sample from './components/Sample';
import SampleContainer from './containers/SampleContainer';
const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
      <hr />
      <SampleContainer />
    </div>
  );
};

export default App;
