// Font awesome for bars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import React
import React from 'react';
import { Link } from 'react-router-dom';
// import css
import './Nav.css';

function Nav() {
	// This is for managing onClick
	const [width, setWidth] = React.useState(window.innerWidth > 0 ? window.innerWidth : Screen.width);
	window.addEventListener('resize', function () {
		setWidth(window.innerWidth);
		console.log(width);
	});
	// No longer needed but leaving in in case we want to change back
	// This is to make sure it always shows up when messing with screen sizes
	// React.useEffect(() => {
	// 	let nav = document.getElementById('linksList');
	// 	if (width > 768) {
	// 		nav.style.display = 'flex'
	// 	} else {
	// 		nav.style.display = 'none';
	// 	}
	// }, [width])

	const handleClickBars = () => {
		if (width < 769) {
			let nav = document.getElementById('linksList');
			if (nav.style.display === 'flex') {
				nav.style.display = 'none';
			} else {
				nav.style.display = 'flex';
			}
		}
	};
	const handleClick = () => {
		if (width < 769) {
			let nav = document.getElementById('linksList');
			nav.style.display = 'none';
		}
	};
	return (
		<div className='navBar'>
			<header className='mobileNavBar'>
				<Link className='appTitle' to='/' onClick={handleClick}>
					<div>PALATE</div>
				</Link>
				<div className='navIcon' onClick={handleClickBars}>
					<FontAwesomeIcon className='appTitle' icon={faBars} />
				</div>
				<Link className='navAboutDesktop' to='/About' onClick={handleClick}>
					About
				</Link>
			</header>
			<nav id='linksList'>
				<Link className='navAbout' to='/About' onClick={handleClick}>
					About
				</Link>
			</nav>
		</div>
	);
}

export default Nav;
