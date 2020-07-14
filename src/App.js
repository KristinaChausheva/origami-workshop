import React from 'react';
import Header from './components/header';
import Aside from './components/aside';
import Origamis from './components/origamis';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div>
        <Aside />
        <Origamis />
      </div>
    </div>
  );
};

export default App;
