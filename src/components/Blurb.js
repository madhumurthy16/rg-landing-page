import React from 'react';
import { Link } from 'react-router-dom';
import './Blurb.css';
import ScrollAnimation from 'react-animate-on-scroll';

/* Section with a small blurb on the left and image on the right */

const Blurb = () => (
	<section className="blurb">
		<div className="container-fluid p-0">
			<div className="row">
				<div className="col-lg-6 my-auto blurb-text">
					<ScrollAnimation animateIn="fadeInDown">
						<h3 className="heading-purple mb-3">Lorem Ipsum</h3>
					</ScrollAnimation>
					<p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet sed, quisque risus vitae semper duis feugiat.</p>
					<Link className="link-learn-more" to="/about">> Learn More</Link>
				</div>
			<div className="col-lg-6 blurb-image"></div>
			</div>
		</div>
	</section>
);

export default Blurb;