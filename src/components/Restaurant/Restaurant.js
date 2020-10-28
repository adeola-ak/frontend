import React from "react";
import "./Restaurant.css";
import { Link, Route } from "react-router-dom";
// import ItemList from "../ItemList/ItemList";

function Restaurant(props) {
	console.log(props.searchedRestaurant);
	let restaurantId = "";
	let restaurantsToDisplay = "Loading...";
	if (props.searchedRestaurant[0]) {
		restaurantsToDisplay = props.searchedRestaurant.map((restaurant) => {
			return (
				<div>
					<p>Restaurant Name: {restaurant.name}</p>
					<p>Zipcode: {restaurant.zipcode}</p>
					<img src={restaurant.img} style={{ height: "16em" }} />
					<p>Items: {restaurant.items[0].name}</p>

					<Link to={`/restaurant/${restaurant._id}`}>
						<button>List of Menu Items</button>
					</Link>
					{/* { restaurantId = restaurant._id}  */}
					<hr />
				</div>
			);
		});
	}
	console.log("this is the restaurantId", restaurantId);

	return (
		<div>
			<h1>Restaurant Component</h1>
			{restaurantsToDisplay}

			{/* <Route exact
				path="/restaurant/:id"
				render={(routerprops) => (
					<ItemList {...routerprops} restaurantId={restaurantId} searchedRestaurant={props.searchedRestaurant} />
				)}
			/> */}
		</div>
	);
}

export default Restaurant;
