import React from 'react';
import classes from './Nav.module.css'
const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <a href="#">Profile</a>
      </div>
      <div>
        <a href="#">Massages</a>
      </div>
      <div>
        <a href="#">News</a>
      </div>
      <div>
        <a href="#">Music</a>
      </div>
      <div>
        <a href="#">Settings</a>
      </div>
    </nav>
  )
};

export default Nav;