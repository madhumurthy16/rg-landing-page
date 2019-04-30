import React from 'react';
import { Link } from 'react-router-dom';
import './BannerRightCTA.css';

const BannerRightCTA = () => (
	<section className="banner-right-cta">
		<div className="container-fluid p-0">
			<div className="row d-flex banner-right-row">
				<div className="col-lg-6 offset-md-6 my-auto banner-right-text">
					<h3 className="heading-purple mb-3">Lorem Ipsum</h3>
					<p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.</p>
					<button type="button" className="btn btn-lg rounded-0 btn-contact-us"><Link className="btn-contact-us" to="/contact">Contact Us</Link></button>
				</div>
			</div>
		</div>
	</section>
);

export default BannerRightCTA;