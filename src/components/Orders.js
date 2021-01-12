import React from 'react';
import OrderContainer from './orders/OrderContainer';
import OrdersListJSON from '../data/orders'

const Orders = () => (
  <div className="main-content not-found">
    <h2>Orders page</h2>
    <OrderContainer data={OrdersListJSON}/>
  </div>
);

export default Orders;