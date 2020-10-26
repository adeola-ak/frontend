// Font awesome for bars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import React
import React from 'react';
// import css
import './Nav.css';

function Nav() {
	const handleClick = () => {
		let nav = document.getElementById('linksList');
		if (nav.style.display === 'flex') {
			nav.style.display = 'none';
		} else {
			nav.style.display = 'flex';
		}
	};
	return (
		<>
			<header className='navBar'>
				<div className='appTitle'>PALATE</div>
				<div className='navIcon' onClick={handleClick}>
					<FontAwesomeIcon icon={faBars} size='2x' />
				</div>
			</header>
			<nav id='linksList'>About</nav>
		</>
	);
}

export default Nav;
