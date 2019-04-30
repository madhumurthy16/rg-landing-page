import React from 'react';
import { Link } from 'react-router-dom';
import './BannerLeftCTA.css';

const BannerLeftCTA = () => (
	<section className="banner-left-cta">
		<div className="container-fluid p-0">
			<div className="row d-flex banner-left-row">
				<div className="col-lg-12 my-auto banner-left-text">
					<h3 className="heading-purple mb-3">Lorem Ipsum</h3>
					<button type="button" className="btn btn-lg rounded-0 btn-contact-us"><Link className="btn-contact-us" to="/contact">Contact Us</Link></button>
				</div>
			</div>
		</div>
	</section>
);

export default BannerLeftCTA;