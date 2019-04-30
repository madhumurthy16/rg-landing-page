import React from 'react';
import './Hero.css';


const Hero = () => (
	<section className="hero-image">
		<div class="hero-content">
  			<div class="container">
  				<div class="row align-items-center justify-content-center d-flex">
	  				<div class="col-md-8 col-lg-7">
						<h1 className="hero-title text-center mb-2">Welcome To</h1>
						<h2 className="hero-title-sub text-center mb-4">Rooster Grin</h2>
						<p className="text-center">
							<button type="button" className="btn btn-lg rounded-0 btn-learn-more text-center"><a href="https://www.roostergrin.com/" target="_blank" rel="noopener noreferrer">Learn More</a></button>
						</p>
					</div>	
				</div>
			</div>
		</div>
	</section>
);

export default Hero;
