import React from 'react';

const Dish = (props) => (
  <li className="dish">
    <img className="dish-img" src={props.img} alt="pizza" />
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <p>{props.crust}</p>
      <p>Size: {props.size}</p>
      {/* <p>{props.topping[0]}</p> */}
      <p>Qty:{props.quantity}</p>
      <p>Price: ${props.total_price}</p>
    </div>
    <button>Add to cart</button>
  </li>
);

export default Dish;