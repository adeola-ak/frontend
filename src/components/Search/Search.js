import React, {useEffect, useState} from "react";
import "./Search.css";

function Search(props) {

	const [formData, setFormData] = useState({
		restaurant: "",
		zipcode: "",
	})

	const [yelpData, setYelpData] = useState([])

	// Handle Change Function
	const handleChange = (event) => {
		event.preventDefault();
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		yelpCall(formData)
	};
	
	useEffect(() => {
		if(yelpData[0]) {
			props.handleSubmit(yelpData)
			props.history.push("/restaurant");
		}
	}, [yelpData[0]])


	const yelpCall = async (formData) => {
		let zip =  formData.zipcode
		let rest = formData.restaurant
		const api_url = `https://aa-palate-backend.herokuapp.com/restaurants/data/${zip}/${rest}`
		const response = await fetch(api_url)
		const json = await response.json()
		setYelpData([json])
	}

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
		</>
	);
}

export default Search;
