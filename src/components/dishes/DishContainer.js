import React from 'react';
import Dish from './Dish';


const DishContainer = (props) => {
  let dishes = props.data.map((dish) => {
    return <Dish   title={dish.title}
                   desc={dish.description}
                   img={dish.img_src}
                   crust={dish.crust}
                   size={dish.size}
                   topping={dish.topping}
                   quantity={dish.quantity}
                   total_price={dish.total_price}
                   key={dish.id} />
  }); 
  return (
    <div>
      <ul>
        {dishes}    
      </ul>
    </div>
  );
}

export default DishContainer;