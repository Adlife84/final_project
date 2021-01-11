import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/">Menu</NavLink></li>
      <li><NavLink to="/clients">Clients</NavLink></li>
      <li><NavLink to="/orders">Orders</NavLink></li>
      <li><NavLink to="/cart">Cart</NavLink></li>
    </ul>    
  </header>
);

export default Header;