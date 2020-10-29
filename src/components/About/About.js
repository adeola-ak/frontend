// import React
import React, { useState } from 'react';

// import css
import './About.css'
import leahPhoto from "./Leah-img.jpg"

function About() {
	
	return (
		<form>
			<h2>Team</h2>

			<p>Adeola</p>

			<p>Leah</p>
			<img src={leahPhoto} alt="Leah Haake bio photo" className="team"/>
			<p className="bio-text">Leah Haake is a current student in General Assembly’s full time Software Engineering Immersive program. For the Unit 3 group project, Leah worked on the front-end for the full stack application, Palate. Leah is excited to be learning full stack web development and to continue to build on her skills. Leah lives in Maine and enjoys spending time outdoors and taking her dog Winston on adventures.</p>

			<p>Jesse</p>
		</form>
	);
}

export default About;
