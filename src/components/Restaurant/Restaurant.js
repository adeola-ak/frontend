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
					<p
						className="RestName"
						style={{ fontSize: "45px", marginTop: "115px" }}
					>
						<span className="hidden">'</span>
						{restaurant.name}
						<span className="hidden">'</span>
					</p>
					{/* <p>{restaurant.zipcode}</p> */}

					<img src={restaurant.img} style={{ height: "20em" }} />
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

	return (
		<>
			<h1 className="helper-text">You searched for...</h1>
			<div>{restaurantsToDisplay}</div>
			<h2>
				If this is not the correct restaurant, please make a more
				specific <Link to="/">search</Link>.
			</h2>
		</>
	);
}

export default Restaurant;
