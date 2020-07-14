import React from 'react';
import Header from './components/header';
import Aside from './components/aside';
import Origamis from './components/origamis';
import Footer from './components/footer';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div>
        <Aside />
        <Origamis />
      </div>
      <Footer />
    </div>
  );
};

export default App;
