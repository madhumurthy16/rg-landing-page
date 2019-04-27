import React from 'react';
import './Services.css';

const Services = () => (
	<section className="Services">
		<div>
			<h2>Lorem ipsum dolor sit amet</h2>
			<p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.</p>
			<a href="http://sample.com">> Lorem Ipsum</a>
		</div>
		<div>
			<img className="services-icon" src='/assets/images/home-expertise.svg' alt="icon indicating expertise"/>
			<img className="services-icon" src='/assets/images/home-lab.svg' alt="icon indicating lab"/>
			<img className="services-icon" src='/assets/images/home-hygiene.svg' alt="icon indicating hygiene"/>
			<img className="services-icon" src='/assets/images/home-retention.svg' alt="icon indicating retention"/>
		</div>
	</section>
);

export default Services;