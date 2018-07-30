import React, { Component } from 'react';

class EditProfile extends Component {
  render() {
    return (
      <section className="container page-section bg-ash">
        <div className="section-title">
          <h5 className="text-center">User Account</h5>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img src="img/avatar.svg" className="img-fluid" alt="avatar"/>
          </div>
          <div className="create-event col-md-8">
            <form className="mt-2 mb-5 pb-5">
              <div className="form-group">
                <label htmlFor="eventName">First Name</label>
                <input type="text" className="form-control" aria-describedby="eventname" defaultValue="John" />
              </div>
              <div className="form-group">
                <label htmlFor="eventName">Last Name</label>
                <input type="text" className="form-control" aria-describedby="eventname" defaultValue="Doe" />
              </div>
              <div className="form-group pb-2">
                <label htmlFor="eventDescription">Add a profile photo</label>
                <div className="custom-file">
                  <input type="file" className="custom-file-input" accept="image/*" />
                  <label className="custom-file-label" htmlFor="customFile">Choose Photo</label>
                </div>
              </div><hr />
              <a href="/" data-toggle="collapse" data-target="#change">More...</a>
              <div className="form-group collapse pt-3" id="change">
                <label htmlFor="eventDescription">Change Password</label>
                <div className="form-group">
                  <input type="password" className="form-control" aria-describedby="eventname" placeholder="Old Password" />
                  <input type="password" className="form-control" aria-describedby="eventname" placeholder="New Password" />
                  <input type="password" className="form-control" aria-describedby="eventname" placeholder="Confirm New Password" />
                </div>
              </div>
              <div className="row pt-3">
                <div className="col">
                  <button className="btn btn-md btn-banner btn-block" type="submit">Save Changes</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default EditProfile;
