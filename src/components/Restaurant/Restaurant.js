import React from 'react';
import './Restaurant.css';

function Restaurant(props) {
let test = props.restaurantData

let restaurantsToDisplay = 'loading...'
  if(props.restaurantData[0]) {
    restaurantsToDisplay = props.restaurantData.map( (restaurant) => {
      return ( 
        <div>
            <p>Restaurant Name: {restaurant.name}</p>
            <p>Zipcode: {restaurant.zipcode}</p>
            <img src={restaurant.img} />
          

        {/* <button onClick={() => {
            props.selectPerson(person)
           props.history.push("/edit") 
        }}>Edit</button> */}

        {/* <button onClick={() => {
            props.deletePersonEntry(person)   
        }}>Delete</button> */}
        <hr />
       
        </div>
      )
    })
  }

console.log("testing", test)

    return (
        <div>
        <h1>Restaurant Component</h1>
        {restaurantsToDisplay}
        </div>
    )
}

export default Restaurant;
