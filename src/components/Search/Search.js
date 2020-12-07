import React from "react";
import axios from "axios";
import "./Search.css";

function Search(props) {
	// State Live here
	// state is for form values in a object
	const [formData, setFormData] = React.useState({
		restaurant: "",
		zipcode: "",
	});

	// Handle Change Function
	const handleChange = (event) => {
		event.preventDefault();
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		console.log("Search submit button clicked!");
		event.preventDefault();
		props.handleSubmit(formData);
		props.history.push("/restaurant");
	};

	// const yelpRestaurants = () => {
	// 	axios({
	// 		url: `https://api.yelp.com/v3/businesses/search`,
	// 		method: "GET",
	// 		headers: {
	// 			x-api-key: nWWS5LvIf8PT6S0hq2fxclcB3Yy3L2s7OX23zp6x2mZEse8nhNnS6ow14hlEAGAAMF_0bFZFr2K1ioUNGKiImx_IuSXXRSZTJdUFEp2-xL9K5IejN7xTwQizwqTOX3Yx,
	// 		},
	// 	}).then(response => {
	// 	console.log(response)
	// });

	return (
		<form className="searchForm" onSubmit={handleSubmit}>
			<input
				className="inputRestaurant"
				type="text"
				name="restaurant"
				placeholder="Name of Restaurant"
				value={formData.restaurant}
				onChange={handleChange}
			/>
			<input
				className="inputZipCode"
				type="number"
				name="zipcode"
				placeholder="ZipCode"
				value={formData.zipcode}
				onChange={handleChange}
			/>
			<input className="SearchBut" type="submit" value="Search" />
		</form>
	);
}

export default Search;
