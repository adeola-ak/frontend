import React from "react";
import "./Restaurant.css";
import { Link, Route } from "react-router-dom";
// import ItemList from "../ItemList/ItemList";

function Restaurant(props) {
	let restaurantsToDisplay = "Loading...";
	if (props.searchedRestaurants[0]) {
		const test = props.searchedRestaurants[0].restaurants;
		restaurantsToDisplay = test.map((restaurant, index) => {
			let allRestaurants = "";
			for (let i = 0; i < restaurant.address.length; i += 1) {
				allRestaurants += restaurant.address[i] + " ";
			}
			return (
				<div className="restCard">
					<p className="RestName">{restaurant.name}</p>
					<p>{restaurant.phone}</p>
					<p>{allRestaurants}</p>

					<img id="restpic" src={restaurant.img} />
					<br></br>
					<Link to={`/restaurant/${restaurant._id}`}>
						<button className="MenuBut">Select</button>
					</Link>
				</div>
			);
		});
	}

	return (
		<>
			<div>
				<h1 className="helper-text">You searched for...</h1>
			</div>
			<div>{restaurantsToDisplay}</div>
			<h2>
				If this is not the correct restaurant, please make a more
				specific <Link to="/">search</Link>.
			</h2>
		</>
	);
}

export default Restaurant;
