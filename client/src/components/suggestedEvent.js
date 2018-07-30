import React, { Component } from 'react';
import eventPic from '../img/events1.jpg';

class SuggestedEvent extends Component {
  render() {
    return (
      <div className="col">
        <div className="card shadow">
          <div className="card-img-box">
            <a href="event-detail.html"><img className="card-img-top" src={eventPic} alt="Event cover" /></a>
          </div>
          <div className="card-body">
            <div className="event-title">
              <h6 className="card-title"><a href="event-detail.html">WinkLeaf Annual New year party, Canada</a></h6>
            </div>
            <div className="event-meta">
              <p className="card-text">
                <span className="text-left">
                  <span><i className="fa fa-eye" /> 100</span>
                  <span><i className="fa fa-map-marker" /> Lagos, Nigeria</span>
                  <span><i className="fa fa-heart" /> 32</span>
                </span>
                <span className="pool-follow text-right"> <a href="/">Follow</a></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SuggestedEvent;
