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
					<p className="RestName">
						{restaurant.name}, {restaurant.zipcode}
					</p>
					<img
						src={restaurant.img}
						style={{ height: "12em", borderRadius: "10px" }}
					/>
					<p>Items: {restaurant.items[0].name}</p>

					<Link to={`/restaurant/${restaurant._id}`}>
						<button
							className="MenuBut"
							style={{ height: "30px", borderRadius: "10px" }}
						>
							Select This Restaurant
						</button>
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
