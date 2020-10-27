import React from 'react';
import './Restaurant.css';

function Restaurant(props) {
let test = props.searchedRestaurant

let restaurantsToDisplay = 'Loading...'
  if(props.searchedRestaurant[0]) {
    restaurantsToDisplay = props.searchedRestaurant.map( (restaurant) => {
      return ( 
        <div>
            <p>Restaurant Name: {restaurant.name}</p>
            <p>Zipcode: {restaurant.zipcode}</p>
            <img src={restaurant.img} />
        <hr />
       
        </div>
      )
    })
  }

    return (
        <div>
          <h1>Restaurant Component</h1>
          {restaurantsToDisplay}
        </div>
    )
}

export default Restaurant;
