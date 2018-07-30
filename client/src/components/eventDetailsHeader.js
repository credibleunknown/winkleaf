import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import cover from '../img/events1.jpg';

class EventDetailsHeader extends Component {
  render() {
    return (
      <div>
        <div className="row text-center event-pool-title">
          <div className="col-sm-8">
            <h5 className="title"><strong>Winkleaf End of the year party, Canada </strong></h5>
          </div>
          <div className="col-sm-4">
            <h6 className="username">@solalaniyan</h6>
          </div>
        </div>

        <div className="row align-items-center justify-content-center event-cover">
          <div className="col">
            <img src={cover} alt="event cover" className="img-fluid mx-auto d-block" />
            <div className="strip">
              <p className="text-white">Strictly By Invitation</p>
            </div>
          </div>
        </div>

        <div className="row meta-section">
          <div className="follow-event">
            <span className="follow-link"><a href="/">Follow Event</a></span>
          </div>
          <div className="follow-host">
            <span className="follow-link"><a href="/">Follow Host</a></span>
          </div>
          <div className="like" data-toggle="tooltip" data-placement="left" title="Like Event">
            <span><a href="/"><i className="fa fa-heart" /> 32</a></span><a href="/">
            </a></div><a href="/">
          </a><div className="share" data-toggle="tooltip" data-placement="left" title="Copy URL"><a href="/">
            <span /></a><a href="/"><i className="fa fa-share" /></a>
          </div>
        </div>

        <div className="row pt-4 pb-3 justify-content-center">
          <div className="countdown">
             <Countdown date={Date.now() + 10000} />
          </div>
        </div>
      </div>
    );
  }
}

export default EventDetailsHeader;
