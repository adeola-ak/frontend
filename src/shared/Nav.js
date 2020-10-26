// Font awesome for bars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import React
import React from 'react'
// import css
import './Nav.css'

function Nav() {
    const handleClick = () => {
        let nav = document.getElementById('linksList')
        if (nav.style.display === 'flex') {
            nav.style.display = 'none'
        } else {
            nav.style.display = 'flex'
        }
    }
    return (
			<header>
				<div className='appTitle'>PALATE</div>
				<div className='navIcon' onClick={handleClick}>
					<FontAwesomeIcon icon={faBars} size='3x' />
				</div>
				<nav id='linksList'>About</nav>
			</header>
		);
}

export default Nav