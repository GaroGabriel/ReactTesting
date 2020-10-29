import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Nav from './components/Nav';
import Profile from './components/Profile';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className='container mainPart'>
        <Nav />
        <Profile />
      </div>
      <Footer />
    </div>
  );
}





export default App;
