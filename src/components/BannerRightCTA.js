import React from 'react';
import { Link } from 'react-router-dom';
import './BannerRightCTA.css';

const BannerRightCTA = () => (
	<section className="banner-right-cta">
		<div className="card text-white border-0 rounded-0">
			<img className="card-img rounded-0 img-fluid" src='/assets/images/banner-2.jpg' alt="Mother and Child using a computer"/>
			<div className="card-img-overlay d-flex ml-auto">
				<div className="my-auto ml-auto">
					<h2 className="card-title">Lorem Ipsum</h2>
					<p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.</p>
					<button type="button" className="btn btn-lg rounded-0 btn-contact-us"><Link className="btn-contact-us" to="/contact">Contact Us</Link></button>
				</div>
			</div>
		</div>
	</section>
);

export default BannerRightCTA;