import React from 'react';
import Order from './Order';


const OrderContainer = (props) => {
  let orders = props.data.map((order) => {
    return <Order  fullname={order.fullname}
                   img={order.img_src}
                   tel={order.tel}
                   order={order.order}
                   status={order.status}
                   address={order.address}
                   key={order.id} />
  }); 

  return (
    <div className="clients">
     
        {orders}    
     
    </div>
  );
}

export default OrderContainer;