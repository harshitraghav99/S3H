import './App.css';
import React from 'react'
import Body from './kanban/component/Body';
import Header from './kanban/component/Header'

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
    </React.Fragment>
  );
}

export default App;
