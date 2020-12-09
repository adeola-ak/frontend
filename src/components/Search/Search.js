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

	const handleNewSubmit = (event) => {
		event.preventDefault();
		fetch("http://localhost:3001/yelp/data")
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data);
			});
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
			<button onClick={handleNewSubmit}>display local</button>
		</>
	);
}

export default Search;
