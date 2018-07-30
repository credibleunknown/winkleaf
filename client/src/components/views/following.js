import React, { Component } from 'react';
import cover from '../../img/events3.jpg';

class Following extends Component {
  render() {
    return (
      <section className="container bg-white page-section my-events">
        <div className="container-fluid events-category">
          <div className="text-center section-title">
            <h5>Events you are following<hr /></h5>
          </div>
          <div className="container">
            <Followed />
            <Followed />
            <Followed />
            <Followed />
            <Followed />
            <Followed />
          </div>
        </div>
      </section>
    );
  }
}

const Followed = () => (
  <div className="row my-events-card" >
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
      <span className="comment-meta-menu dropleft event-options">
        <button className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" id="comment-menu2">
          <i className="fa fa-ellipsis-v" />
        </button>
        <div className="dropdown-menu" aria-labelledby="comment-menu2">
          <a className="dropdown-item" href="/">Copy URL</a>
        </div>
      </span>
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
          <a href="/"><button className="btn btn-action btn-sm text-left user-action">Unfollow</button></a>
        </p>
      </div>
    </div>
  </div>
);

export default Following;
