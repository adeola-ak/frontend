import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
// import components
import Search from "./components/Search/Search";
import About from "./components/About/About";
import Nav from "./shared/Nav";
import Restaurant from "./components/Restaurant/Restaurant";
import ItemList from "./components/ItemList/ItemList";
import RatingList from "./components/RatingList/RatingList";

function App() {
	// URL VARIABLE
	// const url = "http://localhost:3000";
	const url = "https://aa-palate-backend.herokuapp.com/";

	// State for all restaurants
	const [restaurantData, setRestaurantData] = useState([]);

	// State for restaurants searched through Search bar
	const [searchedRestaurant, setSearchedRestaurant] = useState([]);

	// API Call to fetch Restaurants (not currently doing anything)
	const getRestaurants = () => {
		fetch(url + "restaurants/")
			.then((response) => response.json())
			.then((data) => {
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
				let rest = data.restaurants;
				rest.map((r) => {
					if (restaurant.restaurant === r.name) {
						setSearchedRestaurant([r]);
					}
				});
			});
	};

	return (
		<div className="App">
			<main>
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

					<Route
						path="/restaurant/:id"
						render={(routerprops) => (
							<ItemList
								{...routerprops}
								searchedRestaurant={searchedRestaurant}
							/>
						)}
					/>

					<Route
						path="/item/:id"
						render={(routerprops) => (
							<RatingList {...routerprops} />
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
