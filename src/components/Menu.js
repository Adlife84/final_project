import React from 'react';
import DishContainer from './dishes/DishContainer'
import { MenuAllDishesJSON } from '../data/dishes';

const Menu = () => (
  <div className="main-content not-found">
    <h2>Menu page</h2>
      <DishContainer data={MenuAllDishesJSON} />
  </div>
);

export default Menu;