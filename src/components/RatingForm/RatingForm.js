import React from "react";
// import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// solid Star
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
// holy Star
import { faStar as holyStar } from "@fortawesome/free-regular-svg-icons";

const RatingForm = (props) => {
	const [formData, setFormData] = React.useState(props.rating);

	let num = 0;
	const [favStar, setFavStar] = React.useState(props.rating.stars);

	// handles onClick for Rating
	function handleClick(event) {
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
		return setFormData({ ...formData, stars: favStar });
	}
	// makes the favStar go into effect
	React.useEffect(() => {
		setFormData({ ...formData, stars: favStar });
	}, [favStar]);

	// handles Star Ratings
	function star1() {
		if (favStar === 0) {
			return (
				<div>
					<FontAwesomeIcon
						id="1"
						onClick={handleClick}
						icon={holyStar}
						size="1x"
					/>
				</div>
			);
		} else {
			return (
				<div>
					<FontAwesomeIcon
						id="1"
						onClick={handleClick}
						icon={solidStar}
						size="1x"
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
						id="2"
						onClick={handleClick}
						icon={solidStar}
						size="1x"
					/>
				</div>
			);
		} else {
			return (
				<div>
					<FontAwesomeIcon
						id="2"
						onClick={handleClick}
						icon={holyStar}
						size="1x"
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
						id="3"
						onClick={handleClick}
						icon={solidStar}
						size="1x"
					/>
				</div>
			);
		} else {
			return (
				<div>
					<FontAwesomeIcon
						id="3"
						onClick={handleClick}
						icon={holyStar}
						size="1x"
					/>
				</div>
			);
		}
	}

	//FUNCTIONS
	const handleSubmit = (event) => {
		event.preventDefault(); // Prevent Form from Refreshing
		props.handleSubmit(formData); // Submit to Parents desired function
		props.history.push(`/item/${props.id}`); //Push back to display page
	};

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	function stars(rating) {
		return (
			<>
				{star1(rating)}
				{star2(rating)}
				{star3(rating)}
			</>
		);
	}
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
				placeholder="Enter your name"
			/>
			<div className="starRating">Stars: {stars(favStar)}</div>

			<input
				type="date"
				name="date"
				value={formData.date}
				onChange={handleChange}
				placeholder="date"
			/>

			<input
				type="text"
				name="comment"
				value={formData.comment}
				onChange={handleChange}
				placeholder="comment on item"
			/>
			<input type="submit" value={props.label} />
		</form>
	);
};

export default RatingForm;
