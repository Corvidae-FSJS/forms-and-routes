import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>The #-Files Character Display</h1>
      <h2>The Truth Is Out There</h2>
      <h3> And That Truth Is That This Is A Character Display Page For The Last Airbender Because The X-Files API Does Not Have A Random Character Generator, And I Do not Want To Spend The Time To Make That Feature</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/list">List</Link>
        <Link to="/details">Details</Link>
      </nav>
    </header>
  );
};

export default Header;
