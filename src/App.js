import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
// import components
import Search from "./components/Search/Search";
import About from "./components/About/About";
import Nav from "./shared/Nav";
import Restaurant from "./components/Restaurant/Restaurant";
import ItemList from "./components/ItemList/ItemList";
import RatingList from './components/RatingList/RatingList'

function App() {
	// URL VARIABLE
	const url = "https://aa-palate-backend.herokuapp.com/";

	// State for all restaurants
	const [restaurantData, setRestaurantData] = useState([]);

	// State for restaurants searched through Search bar
	const [searchedRestaurant, setSearchedRestaurant] = useState([]);

	// State for item selected for rating view
	const [searchedItem, setSearchedItem] = useState([])

	// API Call to fetch Restaurants (not currently doing anything)
	const getRestaurants = () => {
		fetch(url + "restaurants/")
			.then((response) => response.json())
			.then((data) => {
				console.log("data", data.restaurants);
				setRestaurantData(data.restaurants);
			});
	};

	// Get list of restaurants on page load (not currently doing anything)
	useEffect(() => getRestaurants(), []);

	//handleSubmit to update state when Search submit is clicked
	const handleSubmit = (restaurant) => {
		fetch(url + "restaurants/")
			.then((response) => response.json())
			.then((data) => {
				console.log("data !!", data);
				let rest = data.restaurants;
				console.log("restaurant from search form", restaurant);
				rest.map((r) => {
					if (restaurant.restaurant === r.name) {
						setSearchedRestaurant([r]);
					} else {
						console.log(r.name);
					}
				});
			});
	};

	console.log("This is the restaurantData state", restaurantData);
	console.log("This is the searchedRestaurant state", searchedRestaurant);

	return (
		<div className="App">
			<main>
				<h1>PALATE App Component</h1>
				<Nav />

				<Switch>
					<Route
						exact
						path="/"
						render={(routerprops) => (
							<Search
								{...routerprops}
								handleSubmit={handleSubmit}
							/>
						)}
					/>

					<Route
						exact
						path="/restaurant"
						render={(routerprops) => (
							<Restaurant
								{...routerprops}
								restaurantData={restaurantData}
								searchedRestaurant={searchedRestaurant}
							/>
						)}
					/>

					<Route exact
						path="/restaurant/:id"
						render={(routerprops) => (
							<ItemList {...routerprops} searchedRestaurant={searchedRestaurant} setSearchedItem={setSearchedItem}/>
					)}
					/>

					<Route exact
						path='/item/:id'
						render={(routerprops) => (
							<RatingList {...routerprops} searchedItem={searchedItem} />
						)}
						/>

					<Route path="/About">
						<About />
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;
