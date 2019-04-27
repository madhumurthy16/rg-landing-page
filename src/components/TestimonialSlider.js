import React, { Component } from 'react';
import Slider from "react-slick";
import testimonialsData from './../data/testimonials';
import './TestimonialSlider.css';

class TestimonialSlider extends Component {
	constructor(props) {
		super(props);
		this.state = { testimonials: testimonialsData }
	}

  	render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
      <div>
        <Slider {...settings}>
          {
          	this.state.testimonials.map( (testimonial, index) => 
          		<div key={index} >
          			<h3>{testimonial.title}</h3>
          			<p>{testimonial.text}</p>
          			<img className="testimonial-photo" src={testimonial.photo} alt={testimonial.name} />
          			<p>{testimonial.name}</p>
          			<p>{testimonial.date}</p>
          		</div>
          	)
          }
        </Slider>
      </div>
    );
  }
 }

 export default TestimonialSlider;