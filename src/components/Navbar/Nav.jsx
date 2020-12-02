import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css'
const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div>
        <NavLink to="/massages">Massages</NavLink>
      </div>
      <div>
        <NavLink to="/News">News</NavLink>
      </div>
      <div>
        <NavLink to="/Feed">Feedback</NavLink>
      </div>
      <div>
        <a href="#">Settings</a>
      </div>
    </nav>
  )
};

export default Nav;