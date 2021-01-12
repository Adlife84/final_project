import React from 'react';
import DishContainer from './dishes/DishContainer'
import { MenuAllDishesJSON } from '../data/dishes';
import MainOffer from './MainOffer';

const Menu = () => (
  <div className="main-content not-found">
    <h2>Menu page</h2>
      <MainOffer />
      <DishContainer data={MenuAllDishesJSON} />
  </div>
);

export default Menu;