import React from 'react';
import { Link } from 'react-router-dom';
import './BannerLeftCTA.css';

const BannerLeftCTA = () => (
	<section>
		<div className="card text-white border-0 rounded-0">
			<img className="card-img rounded-0 img-fluid" src='/assets/images/banner-1.jpg' alt="Mother and Child using a computer"/>
			<div className="card-img-overlay col-left d-flex">
				<div className="my-auto">
					<h2 className="card-title heading-purple">Lorem Ipsum</h2>
					<button type="button" className="btn btn-lg rounded-0 btn-contact-us"><Link className="btn-contact-us" to="/contact">Contact Us</Link></button>
				</div>
			</div>
		</div>
	</section>
);

export default BannerLeftCTA;