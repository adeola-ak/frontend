import React from "react";

const ItemForm = (props) => {
	//STATE FOR THE FORM
	const [formData, setFormData] = React.useState(props.restaurantData);
	console.log("props", props.restaurantData);
	//FUNCTIONS
	const handleSubmit = (event) => {
		event.preventDefault(); // Prevent Form from Refreshing
		props.handleSubmit(formData); // Submit to Parents desired function
		props.history.push("/"); //Push back to display page
	};

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	return (
		<form
			style={{ width: "200px", margin: "0 auto" }}
			onSubmit={handleSubmit}
		>
			<input
				type="text"
				name="name"
				value={formData.name}
				onChange={handleChange}
				placeholder="name of menu item"
			/>
			<input
				type="text"
				name="type"
				onChange={handleChange}
				placeholder=""
			/>

			<select
				value={formData.type}
				type="text"
				name="type"
				onChange={handleChange}
			>
				<option value="Ford">Burger</option>
				<option value="Volvo">Pizza</option>
				<option value="Fiat">Pasta</option>
				<option value="Fiat">Salad</option>
				<option value="Fiat">Sandwhich</option>
				<option value="Fiat">Wrap</option>
				<option value="Fiat">Beef</option>
				<option value="Fiat">Poultry</option>
				<option value="Fiat">Seafood</option>
			</select>

			<input
				type="text"
				name="img"
				value={formData.img}
				onChange={handleChange}
				placeholder="Picture of item"
				style={{}}
			/>
			<input type="submit" value={props.label} />
		</form>
	);
};

export default ItemForm;
