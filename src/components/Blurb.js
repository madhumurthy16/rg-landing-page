import React from 'react';
import { Link } from 'react-router-dom';

const Blurb = () => (
	<section className="blurb">
		<div className="row no-gutters">
			<div className="col-left col-md-6 align-self-center">
				<h2 className="heading-purple">Lorem Ipsum</h2>
				<p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet sed, quisque risus vitae semper duis feugiat.</p>
				<Link to="/about">> Learn More</Link>
			</div>
			<div className="col-md-6 md-align-self-end">
				<img className="img-fluid" src='/assets/images/img-1.jpg' alt="Man helping another man climb big rock"/>
			</div>
		</div>
	</section>
);

export default Blurb;