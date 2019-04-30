import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => (
	<section className="services">
		<div className="row no-gutters">
			<div className="col-left col-md-6 py-5 pr-5 my-5 align-self-center">
				<h2 className="heading-black">Lorem ipsum dolor sit amet</h2>
				<p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.</p>
				<Link to="/our-services">> All Services</Link>
			</div>
			<div className="services-col col-md-6 py-5 pl-5 d-flex justify-content-center">
				<div className="row my-5 align-self-center">
					<div className="col-md">
						<div className="services-icon-wrapper">
							<img className="services-icon" src='/assets/images/home-expertise.svg' alt="icon indicating expertise"/>
						</div>
						<p className="services-icon-text heading-black mt-2">Lorem</p>
					</div>
					<div className="col-md">
						<div className="services-icon-wrapper">
							<img className="services-icon" src='/assets/images/home-hygiene.svg' alt="icon indicating lab"/>
						</div>
						<p className="services-icon-text heading-black mt-2">Lorem Ipsum</p>
					</div>
					<div class="w-100"></div>
					<div className="col-md mt-5">
						<div className="services-icon-wrapper">
							<img className="services-icon" src='/assets/images/home-lab.svg' alt="icon indicating hygiene"/>
						</div>
						<p className="services-icon-text heading-black mt-2">Lorem Ipsum</p>
					</div>
					<div className="col-md mt-5">
						<div className="services-icon-wrapper">
							<img className="services-icon" src='/assets/images/home-retention.svg' alt="icon indicating retention"/>
						</div>
						<p className="services-icon-text heading-black mt-2">Lorem</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Services;

