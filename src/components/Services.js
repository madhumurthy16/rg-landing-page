import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import ScrollAnimation from 'react-animate-on-scroll';


const Services = () => (
	<section className="services">
		<div className="container-fluid p-0">
			<div className="row">
				<div className="services-text col-md-6 align-self-center">
					<ScrollAnimation animateIn="fadeInDown">
						<h3 className="heading-purple mb-3">Lorem ipsum dolor sit amet</h3>
					</ScrollAnimation>
					<p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.</p>
					<Link className="link-learn-more" to="/our-services">> All Services</Link>
				</div>
				<div className="services-col col-md-6 d-flex justify-content-center">
					<div className="row my-5 align-self-center">
						<div className="col-sm-3 col-md-6">
							<ScrollAnimation animateIn="fadeInRight">
								<div className="services-icon-wrapper">
									<img className="services-icon" src='/assets/images/home-expertise.svg' alt="icon indicating expertise"/>
								</div>
							</ScrollAnimation>
							<p className="services-icon-text heading-black mt-2 icon-m-rt">Lorem</p>
						</div>
						<div className="col-sm-3 col-md-6">
							<ScrollAnimation animateIn="fadeInRight">
								<div className="services-icon-wrapper">
									<img className="services-icon" src='/assets/images/home-hygiene.svg' alt="icon indicating lab"/>
								</div>
							</ScrollAnimation>
							<p className="services-icon-text heading-black mt-2 icon-m-lt">Lorem Ipsum</p>
						</div>
						<div class="w-md-100"></div>
						<div className="col-sm-3 col-md-6 mt-md-5">
							<ScrollAnimation animateIn="fadeInRight">
								<div className="services-icon-wrapper">
									<img className="services-icon" src='/assets/images/home-lab.svg' alt="icon indicating hygiene"/>
								</div>
							</ScrollAnimation>
							<p className="services-icon-text heading-black mt-2 icon-m-lt">Lorem Ipsum</p>
						</div>
						<div className="col-sm-3 col-md-6 mt-md-5">
							<ScrollAnimation animateIn="fadeInRight">
								<div className="services-icon-wrapper">
									<img className="services-icon" src='/assets/images/home-retention.svg' alt="icon indicating retention"/>
								</div>
							</ScrollAnimation>
							<p className="services-icon-text heading-black mt-2 icon-m-rt">Lorem</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);
	
export default Services;

