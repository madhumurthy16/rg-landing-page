import React from 'react';
import './Hero.css';


const Hero = () => (
	<section>
		<div className="hero card bg-dark text-white">
			<img className="hero-img card-img rounded-0 img-fluid" src='/assets/images/hero.jpg' alt="Golden Gate Bridge at Sunset"/>
			<div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
				<h1 className="card-title">Welcome To</h1>
				<h2 className="card-text">Rooster Grin</h2>
				<button type="button" className="btn btn-lg rounded-0 btn-learn-more"><a href="https://www.roostergrin.com/" target="_blank" rel="noopener noreferrer">Learn More</a></button>
			</div>
		</div>
	</section>
);

export default Hero;