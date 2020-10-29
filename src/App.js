import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';

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
