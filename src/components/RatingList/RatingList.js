import React from 'react';
import Rating from '../Rating/Rating'
import RatingForm from '../RatingForm/RatingForm';
import { Route, Switch, Link } from 'react-router-dom';

function RatingList(props) {
	
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
				setNewRatingState(data.items.ratings)
			});
	};

	// Get function to render
	const getItemRating = () => {
		getRatings();
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
	// let itemName = searchedItem.name;
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
			{/* <h2>{itemName}</h2> */}
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
