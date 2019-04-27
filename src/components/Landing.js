import React from 'react';
import Hero from './Hero';
import Blurb from './Blurb';
import BannerLeftCTA from './BannerLeftCTA';
import Services from './Services';
import BannerRightCTA from './BannerRightCTA';
import TestimonialSlider from './TestimonialSlider';

const Landing = () => (
	<section className="landing">
		<Hero />
		<Blurb />
		<BannerLeftCTA />
		<Services />
		<BannerRightCTA />
		<TestimonialSlider />
	</section>
);

export default Landing;