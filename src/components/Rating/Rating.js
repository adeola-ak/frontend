import React from "react";
// import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// solid Star
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
// holy Star
import { faStar as holyStar } from "@fortawesome/free-regular-svg-icons";
import { Route, Redirect, Link } from "react-router-dom";
import "./Rating.css";

function Rating(props) {
	// handles Star Ratings
	function star1(favStar) {
		if (favStar === 0) {
			return (
				<div>
					<FontAwesomeIcon id="1" icon={holyStar} size="1x" />
				</div>
			);
		} else {
			return (
				<div>
					<FontAwesomeIcon id="1" icon={solidStar} size="1x" />
				</div>
			);
		}
	}
	function star2(favStar) {
		if (favStar > 1) {
			return (
				<div>
					<FontAwesomeIcon id="2" icon={solidStar} size="1x" />
				</div>
			);
		} else {
			return (
				<div>
					<FontAwesomeIcon id="2" icon={holyStar} size="1x" />
				</div>
			);
		}
	}
	function star3(favStar) {
		if (favStar > 2) {
			return (
				<div>
					<FontAwesomeIcon id="3" icon={solidStar} size="1x" />
				</div>
			);
		} else {
			return (
				<div>
					<FontAwesomeIcon id="3" icon={holyStar} size="1x" />
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
	// following Item.js
	let example = props.newRatingState;
	let renderRatings = "Loading...";
	// let renderSubArray = '';
	if (props.newRatingState) {
		renderRatings = example.map((rating) => {
			return (
				<div>
					{/* <p className="Review">{rating.date}</p> */}
					<span className="Review">
						{rating.name} said: "{rating.comment}"
						<div className="starRating">{stars(rating.stars)} </div>{" "}
					</span>
					<button
						className="ItemButs"
						onClick={() => {
							props.selectRating(rating);
							props.history.push(`${props.match.url}/edit`);
						}}
					>
						Edit
					</button>
					<button
						className="ItemButs"
						onClick={() => {
							props.deleteRating(rating);
						}}
					>
						Delete
					</button>
					<br></br> <br></br> <br></br>
				</div>
			);
		});
	}
	return (
		<>
			<h2 className="RestHeader">Popular Reviews: </h2>
			{renderRatings}
		</>
	);
}

export default Rating;
