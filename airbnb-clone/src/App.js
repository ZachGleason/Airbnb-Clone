import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Banner from './Banner';
import Destinations from './Destinations';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <hr />
        <Destinations />
        <Banner />
        <Home />
        <hr />
        <Footer />
    </div>
  );
}

export default App;
