import React from "react";
// import from "react-router-dom";

const ItemForm = (props) => {
	//STATE FOR THE FORM
	const [formData, setFormData] = React.useState(props.item);

	// const id = props.match.params.id;
	//FUNCTIONS
	const handleSubmit = (event) => {
		event.preventDefault(); // Prevent Form from Refreshing
		props.handleSubmit(formData); // Submit to Parents desired function
		props.history.push(`/restaurant/${props.id}`); //Push back to display page
		console.log("submit button", event);
	};

	// SAVE	props.history.push(`/restaurant/${props.match.params.id}`); //Push back to display page

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
				value={formData.type}
				onChange={handleChange}
				placeholder="type of menu item"
			/>

			{/* <select type="text" name="type" onChange={handleChange}>
				<option value="Burger">Burger</option>
				<option value="Pizza">Pizza</option>
				<option value="Pasta">Pasta</option>
				<option value="Salad">Salad</option>
				<option value="Sandwhich">Sandwhich</option>
				<option value="Wrap">Wrap</option>
				<option value="Beef">Beef</option>
				<option value="Poultry">Poultry</option>
				<option value="Seafood">Seafood</option>
			</select> */}

			<input
				type="text"
				name="img"
				value={formData.img}
				onChange={handleChange}
				placeholder="Picture of item"
				style={{}}
			/>
			<input classname="ItemButs" type="submit" value={props.label} />
		</form>
	);
};

export default ItemForm;
