import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Featured from './components/featured/Featured';

function App() {
  return (
    <div className="App">
       <Header />
       <Banner />
       <Featured />
    </div>
  );
}

export default App;
