import React, { Component } from 'react';
import Slider from "react-slick";
import testimonialsData from './../data/testimonials';
import './TestimonialSlider.css';
import ScrollAnimation from 'react-animate-on-scroll';

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
      <section className="testimonial my-5 py-2">
        <div class="container my-5">
          <div className="row align-items-center justify-content-center">
          <div className="col-md-8 text-center">
              <Slider {...settings}>
                {
                	this.state.testimonials.map( (testimonial, index) => 
                		<div key={index} >
                      <ScrollAnimation animateIn="fadeInDown">
                			   <h3 className="mb-5">{testimonial.title}</h3>
                      </ScrollAnimation>
                			<p className="testimonial-text mb-5">{testimonial.text}</p>
                      <div className="d-inline-block">
                			   <img className="img-fluid rounded-circle" src={testimonial.photo} alt={testimonial.name} />
                			</div>
                      <p className="testimonial-name mb-0">{testimonial.name}</p>
                      <p className="testimonial-date">{testimonial.date}</p>
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