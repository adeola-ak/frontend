import React from 'react';
import './Restaurant.css';

function Restaurant(props) {
let test = props.restaurantData

let restaurantsToDisplay = 'loading...'
  if(props.restaurantData[0]) {
    restaurantsToDisplay = props.restaurantData.map( (restaurant) => {
      return ( 
        <div>
            <p>Name: {restaurant.name}</p>
            <img src={restaurant.img} />
            <p>Zipcode: {restaurant.zipcode}</p>

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




//     const restaurants = props.restaurantData
//     console.log("restaurants props", props.restaurantData)
//   const loaded = () => (
//     <div>
//       {restaurants.map((restaurant) => (
//         <article>
//           <img src={restaurant.img} />
//           <h1>{restaurant.name}</h1>
//           <h3>{restaurant.zipcode}</h3>
          {/* <button onClick={() => {
            props.selectDog(dog)        
            props.history.push("/edit")
          }}>
            Edit
          </button>

           <button onClick={() => {
            props.deleteDog(dog)        
          }}>
            Delete
          </button> */}
{/* 
        </article>
      ))}
      </div>
  ) */}

//   if (restaurants[0]) {
//       loaded()
//   }
    // return (
    //     <div>
    //     <h1>Restaurant Component</h1>

    //     { restaurants.length >= 0 ? loaded() : <h1>Loading...</h1> }
    //     </div>
    // )