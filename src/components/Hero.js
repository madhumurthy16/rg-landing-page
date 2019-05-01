import React, { Component } from 'react';
import './Hero.css';
import {Animated} from "react-animated-css";

class Hero extends Component {
	constructor(props) {
		super(props);
		this.state = { isVisible: false }
	}

	render() {
		return (
			<section className="hero-image">
				<div class="hero-content">
		  			<div class="container">
		  				<div class="row align-items-center justify-content-center d-flex">
			  				<div class="col-md-8 col-lg-7">
			  					<Animated animationIn="fadeInDown" animationOut="fadeOut" animationInDuration="1000" isVisible={true}>
									<h1 className="hero-title text-center mb-2">Welcome To</h1>
								</Animated>
			  					<Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDelay="60" animationInDuration="2000" animationOutDuration="3000" isVisible={true}>
									<h2 className="hero-title-sub text-center mb-4">Rooster Grin</h2>
								</Animated>
								<p className="text-center">
									<button type="button" className="btn btn-lg rounded-0 btn-learn-more text-center"><a href="https://www.roostergrin.com/" target="_blank" rel="noopener noreferrer">Learn More</a></button>
								</p>
							</div>	
						</div>
					</div>
				</div>
			</section>
		);
	}
	
}

export default Hero;
