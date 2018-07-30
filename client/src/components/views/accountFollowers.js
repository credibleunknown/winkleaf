import React, { Component } from 'react';
import avatar from '../../img/avatar.svg';

class AccountFollowers extends Component {
  render() {
    return (
      <section className="container bg-white page-section my-events">
        <section className="container-fluid events-category">
          <div>
            <h6 className="invite-heading">Account Followers <span className="badge badge-dark">50</span></h6><hr />
          </div>
          <div>
            <h6 className="invite-heading">Invite Friends</h6>
            <p><i className="fa fa-envelope" /> <a href="/">Email</a></p>
            <p><i className="fab fa-facebook" /> <a href="/">Facebook</a></p>
            <hr />
          </div>
          <div>
            <h6 className="invite-heading"><a href="/">Copy Profile Link</a></h6>
            <hr />
          </div>
          <div>
            <form>
              <div className="form-group row">
                <label htmlFor="searchFollowers" className="col-sm-2 col-form-label"><h6 className="invite-heading">Followers</h6></label>
                <div className="col-sm-6">
                  <input type="search" className="form-control" placeholder="Search Followers" />
                </div>
              </div>
            </form>

            <div className="container">
              <Follower />
              <Follower />
              <Follower />
              <Follower />
              <Follower />
              <Follower />
            </div>
          </div>
        </section>
      </section>
    );
  }
}

const Follower = () => (
  <div className="row follower">
    <div className="col-4">
      <img src={avatar} className="follower-img" alt="avatar"/>
      <span className="text-center"> @solalaniyan</span>
    </div>
    <div className="col-6 pt-3">
      <p className="float-right">
        <span><button className="btn btn-action btn-sm">Follow</button></span>
      </p>
    </div>
    <div className="col-2">
      {/* Event Option */}
      <span className="comment-meta-menu dropleft follower-menu">
        <button className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" id="comment-menu2">
          <i className="fa fa-ellipsis-v" />
        </button>
        <div className="dropdown-menu" aria-labelledby="comment-menu2">
          <a className="dropdown-item" href="/">Report</a>
          <a className="dropdown-item" href="/">Block</a>
        </div>
      </span>
      {/* End of event option */}
    </div>
  </div>
);

export default AccountFollowers;
