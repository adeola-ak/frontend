import React from "react";
import "./Restaurant.css";
import { Link, Route } from "react-router-dom";
// import ItemList from "../ItemList/ItemList";

function Restaurant(props) {
	let town = "";
	let restaurantId = "";
	let restaurantsToDisplay = "Loading...";
	if (props.searchedRestaurant[0]) {
		restaurantsToDisplay = props.searchedRestaurant.map((restaurant) => {
			return (
				<div>
					<p className="RestName" style={{ fontSize: "40px" }}>
						<span className="hidden">'</span>
						{restaurant.name}
						<span className="hidden">'</span>
					</p>
					{/* <p>{restaurant.zipcode}</p> */}

					<img
						src={restaurant.img}
						style={{ height: "16em", borderRadius: "10px" }}
					/>
					{/* <p>Items: {restaurant.items[0].name}</p> */}
					<br></br>
					<Link to={`/restaurant/${restaurant._id}`}>
						<button className="MenuBut">Select</button>
					</Link>
					{/* { restaurantId = restaurant._id}  */}
				</div>
			);
		});
	}

	return <div>{restaurantsToDisplay}</div>;
}

export default Restaurant;
