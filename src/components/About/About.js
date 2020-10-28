// import React
import React, { useState } from 'react';
// To use for rating
// import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// solid Star
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
// holy Star
import { faStar as holyStar } from '@fortawesome/free-regular-svg-icons';

// import css
// import './About.css'

function About() {
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
	let num = 0;
	const [favStar, setFavStar] = useState(0);
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
	return (
		<form>
			<p>Adeola</p>
			<p>Leah</p>
			<p>Jesse</p>
			{star1()}
			{star2()}
			{star3()}
		</form>
	);
}

export default About;
