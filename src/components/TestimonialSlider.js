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
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
      <section className="testimonial my-5">
        <div class="container">
          <div className="row align-items-center justify-content-center">
          <div className="col-md-12 text-center">
              <Slider {...settings}>
                {
                	this.state.testimonials.map( (testimonial, index) => 
                		<div key={index} >
                			<h3>{testimonial.title}</h3>
                			<p className="testimonial-text">{testimonial.text}</p>
                			<img className="testimonial-photo d-inline-block" src={testimonial.photo} alt={testimonial.name} />
                			<p className="testimonial-name-date mt-2">{testimonial.name} {testimonial.date}</p>
                		</div>
                	)
                }
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
 }

 export default TestimonialSlider;