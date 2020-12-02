import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Nav from './components/Navbar/Nav';
import Massages from './components/Massages/Massages'
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Feed from './components/Feed/Feed'


function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className='container mainPart'>

          <Nav />
          <Route path='/profile' component={Profile} />
          <Route path='/massages' component={Massages} />
          <Route path='/news' component={News} />
          <Route path='/Feed' component={Feed} />
          {/* <Profile />
        <Massages /> */}

        </div>
        <Footer />
      </div>
    </BrowserRouter >
  );
}





export default App;
