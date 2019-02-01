import React from 'react';
import './App.css';

import Calculator from '../components/Calculator/Calculator';
import About from '../components/About/About';

const  App = () => (
  <div className="App">
    <Calculator />
    <About />
  </div>
);

export default App;