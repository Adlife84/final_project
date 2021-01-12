import React from 'react';

const DishCreateForm = (props) => (
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


    <form action="" method="get" class="DishCreateForm">
      
      <div class="DishCreateForm">
        <label for="title">Enter title: </label>
        <input type="text" name="title" id="title" required></input>
      </div>

      <div class="DishCreateForm">
        <label for="desc">Enter description: </label>
        <input input type="text" name="desc" id="desc" required></input>
      </div>

      <div class="DishCreateForm">
        <label for="size">Choose Size: </label>
        <input input type="text" name="size" id="size" required></input>
      </div>

      <input type="radio" id="radio"></input>
      <label for="radio">Tradition crust</label>
      
      {/* Checkbox's */}
      <fieldset>
        <legend>Choose your favorite toppings</legend>

        <input type="checkbox" id="sauce" name="sauce" value="Bike"></input>
        <label for="sauce">Extra Sauce</label><br/>

        <input type="checkbox" id="mazzarella" name="mazzarella" value="Bike"></input>
        <label for="mazzarella">Extra Mazzarella</label><br/>

        <input type="checkbox" id="mushrooms" name="toppings" value="Bike"></input>
        <label for="mushrooms">Extra Mushrooms</label><br/>

        <input type="checkbox" id="pepperoni" name="toppings" value="Bike"></input>
        <label for="pepperoni">Extra Pepperoni</label><br/>
     
      </fieldset>

      <div class="DishCreateForm">
        <input type="submit" value="Create new dish"></input>
      </div>
    
    </form>
  </li>
);

export default DishCreateForm;