// import React
import React from 'react';

// import css
import './About.css'
import leahPhoto from "./Leah-img.jpg"
import jessePhoto from "./Jesse-img.jpg"

function About() {
	
	return (
		<form>
			<h2>Team</h2>
				<p>We are current students in General Assembly’s full time Software Engineering Immersive program. Palate is our Unit 3 Project.</p>

			<p>Adeola</p>
				<img src="" alt="Adeola bio photo" className="team"/>
				<p></p>

			<p>Leah</p>
				<img src={leahPhoto} alt="Leah bio photo" className="team"/>
				<p className="bio-text">Leah Haake is a web developer excited to be learning full stack web development and to continue to build on her skills. For the Unit 3 group project, Leah worked on the front-end implementing CRUD functionality for the full stack application. Leah lives in Maine and enjoys spending time outdoors.</p>

			<p>Jesse</p>
				<img src={jessePhoto} alt="Jesse bio photo" className="team"/>
				<p>I’m a software engineer who has used my experience in education and retail to pay attention to detail when troubleshooting and thinking through code. I worked primarily on the frontend setting up foundations to be fined tuned later. I worked on the non crud functionality behind the scenes on the site to make the little details work.</p>

		</form>
	);
}

export default About;
