import React from 'react';

const BannerRightCTA = () => (
	<section className="hero">
		<div className="hero card bg-dark text-white mb-5 border-0 rounded-0">
			<img className="card-img rounded-0 img-fluid" src='/assets/images/banner-2.jpg' alt="Mother and Child using a computer"/>
			<div className="card-img-overlay m-5 d-flex align-items-center justify-content-center">
				<h2 className="hero-title card-title font-weight-bold">Lorem Ipsum</h2>
				<p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.</p>
				<button type="submit" className="btn-submit" id="btn-learn-more">Learn More</button>
			</div>
		</div>
	</section>
);

export default BannerRightCTA;