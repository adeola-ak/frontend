// Font awesome for bars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import React
import React from 'react';
import { Link } from 'react-router-dom';
// import css
import './Nav.css';

function Nav() {
	const handleClickBars = () => {
		let nav = document.getElementById('linksList');
		if (nav.style.display === 'flex') {
			nav.style.display = 'none';
		} else {
			nav.style.display = 'flex';
		}
    };
    const handleClick = () => {
        let nav = document.getElementById('linksList')
        nav.style.display = 'none'
    }
	return (
		<div className='navBar'>
			<header className='mobileNavBar'>
				<Link className='appTitle' to='/' onClick={handleClick}>
					<div>PALATE</div>
				</Link>
				<div className='navIcon' onClick={handleClickBars}>
					<FontAwesomeIcon icon={faBars} />
				</div>
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
