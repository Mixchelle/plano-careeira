import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Contato from './components/Contato';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Contato />
    </div>
  );
}

export default App;
