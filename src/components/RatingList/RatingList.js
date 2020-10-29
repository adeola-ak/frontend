import React from 'react';
import Rating from '../Rating/Rating'
import RatingForm from '../RatingForm/RatingForm';
import { Route, Switch, Link } from 'react-router-dom';
// import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// solid Star
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
// holy Star
import { faStar as holyStar } from '@fortawesome/free-regular-svg-icons';

function RatingList(props) {
	// handles Star Ratings
	function star1(favStar) {
		if (favStar === 0) {
			return (
				<div>
					<FontAwesomeIcon id='1' icon={holyStar} size='2x' />
				</div>
			);
		} else {
			return (
				<div>
					<FontAwesomeIcon id='1' icon={solidStar} size='2x' />
				</div>
			);
		}
	}
	function star2(favStar) {
		if (favStar > 1) {
			return (
				<div>
					<FontAwesomeIcon id='2' icon={solidStar} size='2x' />
				</div>
			);
		} else {
			return (
				<div>
					<FontAwesomeIcon id='2' icon={holyStar} size='2x' />
				</div>
			);
		}
	}
	function star3(favStar) {
		if (favStar > 2) {
			return (
				<div>
					<FontAwesomeIcon id='3' icon={solidStar} size='2x' />
				</div>
			);
		} else {
			return (
				<div>
					<FontAwesomeIcon id='3' icon={holyStar} size='2x' />
				</div>
			);
		}
	}
	function stars(rating) {
		return (
			<>
				{star1(rating)}
				{star2(rating)}
				{star3(rating)}
			</>
		);
	}
	// will need to check pathing
	const id = props.match.params.id;

	const url = 'https://aa-palate-backend.herokuapp.com/';

	// State for item selected for rating view
	const [searchedItem, setSearchedItem] = React.useState([]);

	const [itemRating, setItemRating] = React.useState([]);

	const emptyRating = {
		name: '',
		date: '',
		stars: '',
		comment: '',
	};

	const ratings = searchedItem;

	const [selectedRating, setSelectedRating] = React.useState(emptyRating);

	const [form, setForm] = React.useState(emptyRating);

	const [newRatingState, setNewRatingState] = React.useState([]);

	// let ratingToDisplay = 'Loading...';
	// if (props.searchedItem[0]) {
	// 	ratingToDisplay = ratings.map((rating) => {
	// 		return (
	// 		<div>
	// 			<p>Name: {rating.ratings[0].name}</p>
	// 			<p>Date: {rating.ratings[0].date}</p>
	// 			<p>Rating: {stars(rating.ratings[0].stars)}</p>
	// 			<p>Comment: {rating.ratings[0].comment}</p>
	// 		</div>
	// 		)
	// 	});
	// }

	// Get Ratings
	const getRatings = () => {
		fetch(url + 'items/' + id)
			.then((response) => response.json())
			.then((data) => {
				setSearchedItem(data.items);
			});
	};

	// Get function to render
	const getItemRating = () => {
		getRatings();
		setNewRatingState(searchedItem);
	};
	

	// Renders first time on page
	React.useEffect(() => getItemRating(), []);

	// updates List after change
	const updateRatingList = () => {
		fetch(url + 'ratings/' + id)
			.then((response) => response.json())
			.then((data) => {
				setNewRatingState(data.ratings);
			});
	};

	// Creates a rating
	const handleCreate = (newRating) => {
		let payload = { newRating, restId: id };

		fetch(url + 'items', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		}).then(() => {
			updateRatingList();
		});
	};

	// Handles edit
	const handleUpdate = (rating) => {
		fetch(url + 'ratings/' + rating._id, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(rating),
		}).then(() => {
			getRatings();
		});
	};

	const deleteRating = (rating) => {
		fetch(url + ':id/' + rating._id, {
			method: 'delete',
		});
		return updateRatingList();
	};

	// adds Item name to top of page
	// let iName = searchedItem;
	let itemName = searchedItem.name;
	// if (searchedItem) {
	// 	itemName = iName.map((item) => {
	// 		return (
	// 			<div>
	// 				<p>{item.name}</p>
	// 				<hr />
	// 			</div>
	// 		);
	// 	});
	// }
	
	return (
		<>
			<h2>{itemName}</h2>
			{/* {ratingToDisplay} */}
			<Route
				path='/rating/:id'
				render={(routerprops) => (
					<RatingForm
						{...routerprops}
						handleSubmit={handleCreate}
						rating={form}
					/>
				)}
			/>
			<Rating
				newRatingState={newRatingState}
				deleteRating={deleteRating}
			/>
			{/* <Route
					path='/rating/:id'
					render={(routerprops) => (
						<RatingForm
							{...routerprops}
							handleSubmit={handleUpdate}
							rating={form}
						/>
					)}
				/> */}
		</>
	);
}
export default RatingList;
