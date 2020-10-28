import React from 'react';
import RatingForm from '../RatingForm/RatingForm';
import { Route, Switch } from 'react-router-dom';

function RatingList(props) {
	// handles Star Ratings
	function star1(favStar) {
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
	function star2(favStar) {
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
	function star3(favStar) {
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
	function stars(rating) {
		return (
			<>
				{star1(rating)}
				{star2(rating)}
				{star3(rating)}
			</>
		);
	}

	const ratings = props.searchedItem;
	let ratingToDisplay = 'Loading...';
	if (props.searchedItem[0]) {
		ratingToDisplay = ratings.map((rating) => {
			<div>
				<p>Name: {rating.ratings[0].name}</p>
				<p>Date: {rating.ratings[0].date}</p>
				<p>Rating: {stars(rating.ratings[0].stars)}</p>
				<p>Comment: {rating.ratings[0].comment}</p>
			</div>;
		});
	}

	const url = 'https://aa-palate-backend.herokuapp.com/';

	const [itemRating, setItemRating] = React.useState([]);

	const emptyRating = {
		name: '',
		date: '',
		stars: '',
		comment: '',
	};

	const [form, setForm] = React.useState(emptyRating);

	const getRatings = () => {
		fetch(url + 'ratings/')
			.then((response) => response.json())
			.then((data) => {
				setItemRating(data);
			});
	};

	const handleCreate = (newRating) => {
		let payload = { newRating, restId: props.match.params._id };

		fetch(url + 'items', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		}).then(() => {
			getRatings();
		});
	};

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
		}).then((response) => getRatings());
	};

	return (
		<>
			<h2>This is the RatingList Component</h2>
			{ratingToDisplay}
			<Switch>
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
				<Route
					path='/rating/:id'
					render={(routerprops) => (
						<RatingForm
							{...routerprops}
							handleSubmit={handleUpdate}
							rating={form}
						/>
					)}
				/>
			</Switch>
		</>
	);
}
export default RatingList;
