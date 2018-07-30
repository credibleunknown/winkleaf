import React, { Component } from 'react';
import cover from '../img/events1.jpg';


class EventStory extends Component {
  render() {
    return (
      <div className="col-md-6 col-lg-4">
        <div className="card shadow">
          <div className="card-img-box">
            <a href="event-stories.html"><img className="card-img-top" src={cover} alt="Event cover" /></a>
          </div>
          <div className="card-body">
            <div className="event-title">
              <h6 className="card-title"><a href="event-stories.html">WinkLeaf Annual New year party, Canada</a></h6>
            </div>
            <div className="event-meta">
              <p className="card-text">
                <span className="text-left">
                  <span><i className="fa fa-eye" /> 100</span>
                  <span><i className="fa fa-map-marker" /> Lagos, Nigeria</span>
                </span>
                <span className="album-size">150</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventStory;
