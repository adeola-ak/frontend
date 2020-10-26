import React, {useState, useEffect} from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Search from './components/Search/Search'
import Restaurant from './components/Restaurant/Restaurant'

function App() {
    // URL VARIABLE
  const url = "https://aa-palate-backend.herokuapp.com/"

  // State
  const [restaurantData, setRestaurantData] = useState([])

  // State searched Restaurant
   const [searchedRestaurant, setSearchedRestaurant] = useState([])

  // API Call to fetch Restaurants
    const getRestaurants = () => {
      fetch(url + "restaurants/")
      .then(response => response.json())
      .then(data => {
        console.log("data", data.restuarants)
        setRestaurantData(data.restuarants)   
      })
    }

   // Get list of restaurants on page load  
  useEffect( () => getRestaurants(), [])


    console.log("This is restaurant data", restaurantData)
  // handleUpdate to update restautant when Search button is clicked
  // method: put (update)
  const handleUpdate = (restaurant) => {
    fetch(url + "restaurants/" + restaurant.name, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(restaurant)
    })
    .then(response => getRestaurants())    // .then to update the list of restaurants 
    console.log("This is the restaurant data sent", restaurant)
  }


  console.log("This is the restaurantData state", restaurantData)
 console.log("This is the searchedRestaurant state", searchedRestaurant)

  return (
    <div className="App">
      <main>
        <h1>PALATE App Component</h1>

        <Switch>

        

          <Route exact path="/"
            render={(routerprops) => 
            <Search {...routerprops} handleSubmit={handleUpdate} /> }
          />

          <Route exact path="/restaurant"
              render={(routerprops) => 
              <Restaurant {...routerprops} restaurantData={restaurantData}  />}
          />
        </Switch>
      </main>

    </div>
  );
}

export default App;
