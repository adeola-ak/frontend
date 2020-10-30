import React from "react";
import Rating from "../Rating/Rating";
import RatingForm from "../RatingForm/RatingForm";
import { Route, Switch, Link } from "react-router-dom";
import "./RatingList.css";

function RatingList(props) {
	const id = props.match.params.id;

	const url = "https://aa-palate-backend.herokuapp.com/";

	// State for item selected for rating view
	const [searchedItem, setSearchedItem] = React.useState([]);

	const [itemRating, setItemRating] = React.useState([]);

	const emptyRating = {
		name: "",
		date: "",
		stars: "",
		comment: "",
	};

	const ratings = searchedItem;

	const [selectedRating, setSelectedRating] = React.useState(emptyRating);

	const [form, setForm] = React.useState(emptyRating);

	const [newRatingState, setNewRatingState] = React.useState([]);

	// Get Ratings
	const getRatings = () => {
		fetch(url + "items/" + id)
			.then((response) => response.json())
			.then((data) => {
				setSearchedItem(data.items);
				setNewRatingState(data.items.ratings);
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
		getItemRating();
	};

	// Creates a rating
	const handleCreate = (newRating) => {
		let payload = { newRating, restId: id };

		fetch(url + "ratings/", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		}).then(() => {
			updateRatingList();
		});
	};

	// Handles edit
	const handleUpdate = (rating) => {
		fetch(url + "ratings/" + rating._id, {
			method: "put",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(rating),
		}).then(() => {
			getRatings();
		});
	};

	const deleteRating = (rating) => {
		fetch(url + "ratings/" + rating._id, {
			method: "delete",
		}).then(() => {
			updateRatingList();
		});
	};

	const selectRating = (rating) => {
		setSelectedRating(rating);
	};

	return (
		<>
			{/* <h2>{itemName}</h2> */}
			{/* {ratingToDisplay} */}
			<Link to={props.match.url + "/add"}>
				<button className="BiggerItemBut">Add a Rating</button>
			</Link>

			<Switch>
				<Route
					exact
					path={props.match.url + "/add"}
					render={(routerprops) => (
						<RatingForm
							{...routerprops}
							handleSubmit={handleCreate}
							rating={form}
							id={props.match.params.id}
						/>
					)}
				/>
				<Route
					exact
					path={props.match.url}
					render={(routerprops) => (
						<Rating
							{...routerprops}
							newRatingState={newRatingState}
							selectRating={selectRating}
							deleteRating={deleteRating}
						/>
					)}
				/>
				<Route
					exact
					path={props.match.url + "/edit"}
					render={(routerprops) => (
						<RatingForm
							{...routerprops}
							handleSubmit={handleUpdate}
							rating={selectedRating}
							id={props.match.params.id}
						/>
					)}
				/>
			</Switch>
		</>
	);
}
export default RatingList;
