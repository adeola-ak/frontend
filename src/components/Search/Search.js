import React from "react";
// import axios from "axios";
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
		// yelpData(formData)
		// yelpCall(formData)
	};

	// const handleNewSubmit = (event) => {
	// 	event.preventDefault();
	// 	props.handleSubmit(formData)
	// 	fetch("http://localhost:3001/yelp/data")
	// 		.then((resp) => resp.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 		});
	// };

	// const yelpData = (formData) => {
	// 	fetch("http://localhost:3000/yelp/data", {
	// 		method: "POST",
	// 		headers: {
	// 			Accept: "application/json",
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify({
	// 			restaurant: formData.restaurant,
	// 			zipcode: formData.zipcode,
	// 		}),
	// 		// params: {
	// 		// 	restaurant: formData.restaurant,
	// 		// 	zipcode: formData.zipcode,
	// 		// },
	// 	}).then((response) => {
	// 		//do something awesome that makes the world a better place
	// 		console.log(response);
	// 	});
	// };

	const yelpCall = async (formData) => {
		let zip = formData.zipcode;
		let rest = formData.restaurant;
		const api_url = `http://localhost:3000/yelp/data/${zip}/${rest}`;
		const response = await fetch(api_url);
		const json = await response.json();
		console.log(json);
	};

	return (
		<>
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
			{/* <button onClick={}>display local</button> */}
		</>
	);
}

export default Search;
