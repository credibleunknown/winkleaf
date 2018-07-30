import React, { Component } from 'react';
import EventDetailsHeader from '../eventDetailsHeader';
import picture from '../../img/events2.jpg';

class EventDetails extends Component {
  render() {
    return (
      <section className="container bg-white page-section">
        <BuyTicketButton />
        <MobileTicketButton />
       <EventDetailsHeader />
        {/* Event menu */}
        <div className="row justify-content-center event-menu-section sticky-top">
          <div className="nav-scroller event-menu">
            <nav className="nav nav-underline">
              <a className="nav-link active" href="/event-detail">Details</a>
              <a className="nav-link" href="/event-updates">Updates</a>
              <a className="nav-link" href="/event-stories">Stories</a>
            </nav>
          </div>
        </div>
        {/* End of event menu */}
        <div className="row container">
          <div className="col-md-7 event-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem reiciendis possimus perspiciatis aliquid, doloribus eius saepe? Necessitatibus aperiam rerum sint, aut id facere alias enim totam nisi, sed tempora ad! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ipsa earum impedit rem tempora error velit a, architecto voluptatum sit numquam autem sunt hic nesciunt, alias aliquam, maxime porro, nulla! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore reiciendis doloremque magnam provident ab, architecto aliquid veritatis id soluta cupiditate dolores ratione iste quas neque temporibus, perspiciatis libero ullam aperiam?</p>
          </div>
          <div className="col-md-5 event-info">
            <p><strong>Event Starts:</strong> 10/06/2018 08:00</p>
            <p><strong>Event Ends:</strong> 10/06/2018 20:00</p>
            <p>Online</p>
            <p><strong>Name of Facility:</strong> Eko Hotel</p>
            <p><strong>Address:</strong> Victoria Island, Lagos State</p>
            <p><i className="fa fa-map-marker" /> <a href="/">View Map</a></p>
            <p><i className="fa fa-book" /> <a href="/">Ticket</a></p>
          </div>
        </div>
        <div className="row event-video text-center event-cover">
          <div className="col-md-6 offset-md-3 col-sm-12">
            <video src="video/video.mp4" controls className="mx-auto d-block">
            </video>
          </div>
        </div>
        {/* Pre-event Photos */}
        <section className="container-fluid pre-event">
          <div className="text-center section-title">
            <h5>Pre-event Photos</h5>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <PreEventPhoto />
              <PreEventPhoto />
              <PreEventPhoto />
              <PreEventPhoto />
            </div>
          </div>
        </section>
        {/* End of pre-event photos */}
      </section>
    );
  }
}

const BuyTicketButton = () => (
  <div>
    <a href="/" className="buy-ticket shadow" data-toggle="collapse" data-target=".ticket-options">
      <span>Buy<br />Ticket</span>
    </a>
    <div className="row container shadow collapse ticket-options">
      <div className="col-12">
        <a href="/">Ariya Ticket</a>
      </div>
      <div className="col-12">
        <a href="/">Event Brite</a>
      </div>
    </div>
  </div>
);

const MobileTicketButton = () => (
  <div className="fixed-bottom">
    <div className="row container shadow collapse ticket-option-mobile">
      <div className="col-12">
        <a href="/">Ariya Ticket</a>
      </div>
      <div className="col-12">
        <a href="/">Event Brite</a>
      </div>
    </div>
    <a href="/" className="buy-ticket-mobile shadow" data-toggle="collapse" data-target=".ticket-option-mobile">
      <div className="buy-ticket-mobile sticky-bottom">
        <span>Buy Ticket/Register</span>
      </div>
    </a>
  </div>
);

const PreEventPhoto = () => (
  <div>
    <div className="col-sm-12 col-4">
      <div className="card shadow">
        <div className="card-img-box">
          <img className="card-img-top img-fluid" src={picture} alt="Event pic" />
        </div>
      </div>
    </div>
  </div>
);

export default EventDetails;
