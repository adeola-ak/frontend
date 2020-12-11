// import React
import React from "react";

// import css
import './About.css'
import leahPhoto from "./Leah-img.jpg"
import jessePhoto from "./Jesse-img.jpg"
import adeolaPhoto from "./Adeola-img.jpg"

function About() {
	return (
		<main>
		<div className="intro-text">
				<h1>About</h1>
				<p>PALATE is a full stack web application built with the MERN stack (MongoDB, Express, React and Node.js) with full CRUD functionality.</p>
				<p>The application highlights ratings and reviews for specific items on a restaurant menu.</p>
				<p>Users can utilize the app looking to find suggestions and as a reviewer.</p>
				<ul>
					<li>As someone looking for suggestions, users can search for a restaurant, find a list of menu items, ratings and reviews associated with specific menu items.</li>
					<li>As a reviewer, users can search for a restaurant, add items, add item ratings and write item reviews.</li>
				</ul>	
				<p>PALATE is our Unit 3 Project for General Assembly’s Software Engineering Immersive program.</p>
			</div>
				
			<div className="bio-container">
				<h1>Team</h1>
				<img src={adeolaPhoto} alt="Adeola bio photo" className="team"/>
					<p className="name">Adeola</p>
					<p className="bio-text">Hi! I really enjoyed seeing all the core fundamentals
                        learned throughout this course so far come together in
                        this full stack build. I love diagnosing real life
                        problems and thinking through ways to solve them through
                        code and applications. For this build, I primarily
                        worked on the backend ensuring our data was accessible on
                        the front-end.</p>
				</div>

				<div className="bio-container">
				<img src={leahPhoto} alt="Leah bio photo" className="team"/>
					<p className="name">Leah</p>
					<p className="bio-text">I'm a web developer with a background in public health. I'm excited to be learning full stack web development and to continue to develop my programming skills. I worked on the front-end implementing CRUD functionality for our full stack application.</p>
				</div>

				<div className="bio-container">
				<img src={jessePhoto} alt="Jesse bio photo" className="team"/>
					<p className="name">Jesse</p>
					<p className="bio-text">I’m a software engineer who has used my experience in education and retail to pay attention to detail when troubleshooting and thinking through code. I worked primarily on the frontend setting up foundations to be fined tuned later. I worked on the non crud functionality behind the scenes on the site to make the little details work.</p>
				</div>
		</main>
	);
}

export default About;
