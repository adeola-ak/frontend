import React from 'react';
import './Search.css';

function Search() {
    // State Live here
    // state is for form values in a object
    const [formData, setFormData] = React.useState({restaurant: '', zipcode: ''})

    // Handle Change Function
    const handleChange = (event) => {
        event.preventDefault()
        setFormData({...formData, [event.target.name]: event.target.value})
    }
	return (
		<form>
			<input
				type='text'
				name='restaurant'
				placeholder='Name of Restaurant'
				value={formData.restaurant}
				onChange={handleChange}
			/>
			<input
				type='number'
				name='zipcode'
				placeholder='ZipCode'
				value={formData.zipcode}
				onChange={handleChange}
			/>
			<input type='submit' value='Search' />
		</form>
	);
}

export default Search;
