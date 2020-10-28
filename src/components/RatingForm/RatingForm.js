import React from 'react';
// import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// solid Star
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
// holy Star
import { faStar as holyStar } from '@fortawesome/free-regular-svg-icons';

const RatingForm = (props) => {
	const [formData, setFormData] = React.useState(props.rating);

	let num = 0;
	const [favStar, setFavStar] = useState(0);
	// handles onClick for Rating
	function handleClick(event) {
		console.log(event.target.id);
		num = parseInt(event.target.id);
		if (num === 1) {
			if (num === favStar) {
				setFavStar(0);
			} else {
				setFavStar(1);
			}
		} else if (num === 2) {
			if (num === favStar) {
				setFavStar(0);
			} else {
				setFavStar(2);
			}
		} else if (num === 3) {
			if (num === favStar) {
				setFavStar(0);
			} else {
				setFavStar(3);
			}
		}
	}

	// handles Star Ratings
	function star1() {
		if (favStar === 0) {
			return (
				<div>
					<FontAwesomeIcon
						id='1'
						onClick={handleClick}
						icon={holyStar}
						size='2x'
					/>
				</div>
			);
		} else {
			return (
				<div>
					<FontAwesomeIcon
						id='1'
						onClick={handleClick}
						icon={solidStar}
						size='2x'
					/>
				</div>
			);
		}
	}
	function star2() {
		if (favStar > 1) {
			return (
				<div>
					<FontAwesomeIcon
						id='2'
						onClick={handleClick}
						icon={solidStar}
						size='2x'
					/>
				</div>
			);
		} else {
			return (
				<div>
					<FontAwesomeIcon
						id='2'
						onClick={handleClick}
						icon={holyStar}
						size='2x'
					/>
				</div>
			);
		}
	}
	function star3() {
		if (favStar > 2) {
			return (
				<div>
					<FontAwesomeIcon
						id='3'
						onClick={handleClick}
						icon={solidStar}
						size='2x'
					/>
				</div>
			);
		} else {
			return (
				<div>
					<FontAwesomeIcon
						id='3'
						onClick={handleClick}
						icon={holyStar}
						size='2x'
					/>
				</div>
			);
		}
	}

	//FUNCTIONS
	const handleSubmit = (event) => {
		event.preventDefault(); // Prevent Form from Refreshing
		props.handleSubmit(formData); // Submit to Parents desired function
		props.history.push('/restaurant'); //Push back to display page
	};

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	return (
		<form style={{ width: '200px', margin: '0 auto' }} onSubmit={handleSubmit}>
			<input
				type='text'
				name='name'
				value={formData.name}
				onChange={handleChange}
				placeholder='Enter your name'
			/>
            <input type='hidden' name='date' value={new Date()} />
			{star1()}
			{star2()}
			{star3()}
			<input type='hidden' name='stars' value={favStar} />
			<input
				type='text'
				name='commit'
				value={formData.type}
				onChange={handleChange}
				placeholder='comment on item'
			/>
			<input type='submit' value={props.label} />
		</form>
	);
};

export default RatingForm
