import React from 'react';

const BannerLeftCTA = () => (
	<section className="hero">
		<div className="hero card bg-dark text-white mb-5 border-0 rounded-0">
			<img className="card-img rounded-0 img-fluid" src='/assets/images/banner-1.jpg' alt="Mother and Child using a computer"/>
			<div className="card-img-overlay m-5 d-flex align-items-center justify-content-center">
				<h2 className="hero-title card-title font-weight-bold">Lorem Ipsum</h2>
				<button type="submit" className="btn-submit" id="btn-learn-more">Learn More</button>
			</div>
		</div>
	</section>
);

export default BannerLeftCTA;