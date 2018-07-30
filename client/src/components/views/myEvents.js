import React, { Component } from 'react';
import cover from '../../img/events2.jpg';

class MyEvents extends Component {
  render() {
    return (
      <div>
        <section className="container bg-white page-section my-events">
          <div className="container-fluid events-category">
            <div className="text-center section-title">
              <h5>My Events</h5>
            </div>
            <div className="container">
              <MyEvent />
              <MyEvent />
              <MyEvent />
              <MyEvent />
              <MyEvent />
              <MyEvent />
              <MyEvent />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const MyEvent = () => (
  <div className="row my-events-card">
    <div className="col-2 img-box">
      <a href="my-event-details.html">
        <img className="card-img-top" src={cover} alt="Event Cover" />
      </a>
    </div>
    <div className="col-10 col-md-7">
      <h6 className="card-title"><a href="my-event-details.html">WinkLeaf Annual New year party, Canada</a></h6>
      <div className="event-meta">
        <p className="card-text">
          <span className="text-left">
            <span><i className="fa fa-map-marker" /> Lagos, Nigeria</span>
            <span><i className="fa fa-calendar" /> 24/05/2018</span>
          </span>
        </p>
      </div>
      {/* Event Option */}
      <span className="comment-meta-menu dropleft event-options">
        <button className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" id="comment-menu2">
          <i className="fa fa-ellipsis-v" />
        </button>
        <div className="dropdown-menu" aria-labelledby="comment-menu2">
          <a className="dropdown-item" href="/">Edit</a>
          <a className="dropdown-item" href="/">Share</a>
          <a className="dropdown-item" href="/">Hide</a>
          <a className="dropdown-item" href="/">Delete</a>
        </div>
      </span>
      {/* End of event option */}
      {/* Followers and likes */}
      <div className="action-detail">
        <p className="card-text">
          <span className="text-left follow-detail">Followers <span className="badge"> 22</span></span>
          <span className="float-right likes-detail">Likes <span className="badge"> 22</span></span>
        </p>
      </div>
      {/* End of  Followers and likes*/}
      <div className="event-meta">
        <p className="card-text">
          <a href="wink.html">
            <button className="btn btn-action btn-sm text-left user-action">Wink</button>
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default MyEvents;
