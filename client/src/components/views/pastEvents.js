import React, { Component } from 'react';
import Slider from "react-slick";
import PastEvent from '..//pastEvent';
import '../../css/slick.css';

class PastEvents extends Component {
  render() {
    var settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            centerMode: true,
            dots: true,
            arrows: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <section className="container-fluid pt-5 events-category">
        <div className="text-center section-title">
          <h5>Past Events</h5>
        </div>
        <div className="container">
          <div className="events-slider slider">
            <Slider {...settings}>
              <PastEvent />
              <PastEvent />
              <PastEvent />
              <PastEvent />
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default PastEvents;
