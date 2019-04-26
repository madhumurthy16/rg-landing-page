import React from 'react';
import './Hero.css';

const Hero = () => (
	<section className="hero">
		<div className="hero card bg-dark text-white mb-5 border-0 rounded-0">
			<img className="card-img rounded-0 img-fluid" src='/assets/images/hero.jpg' alt="Golden Gate Bridge at Sunset"/>
			<div className="card-img-overlay m-5 d-flex align-items-center justify-content-center">
				<h1 className="hero-title card-title font-weight-bold">Welcome To</h1>
				<p>Rooster Grin</p>
				<button type="submit" className="btn-submit" id="btn-learn-more" >Learn More</button>
			</div>
		</div>
	</section>
);

export default Hero;