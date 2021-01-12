import React from 'react';

const Order = (props) => (
  <li className="order">
    <img className="dish-img" src={props.img} alt="order" />
    <div>
      <h3>{props.fullname}</h3>
      <p>{props.tel}</p>
      <p>{props.order}</p>
      <p>{props.status}</p>
      <p>{props.address}</p>
    </div>
    <button>Add to cart</button>
  </li>
);

export default Order;