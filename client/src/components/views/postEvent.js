import React, { Component } from 'react';

class PostEvent extends Component {
  render() {
    return (
      <section className="container page-section bg-ash">
        <div className="row">
          <div className="create-event col-md-8 offset-md-2">
            <form className="mt-2 mb-5 pb-5">
              <div className="form-title">
                <h6 className="text-center">* Compulsory fields</h6>
              </div>
              <div className="form-group">
                <label htmlFor="eventName">*Name of Event</label>
                <input type="text" className="form-control" aria-describedby="eventname" />
              </div>
              <div className="form-group">
                <label htmlFor="eventDescription">*Event Description</label>
                <textarea className="form-control" rows={4} placeholder="what's your event about? 500 words max" defaultValue={""} />
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="startDate">*Start Date</label>
                  <input type="text" className="form-control" aria-describedby="startDate" />
                </div>
                <div className="col">
                  <label htmlFor="startTime">*Start Time</label>
                  <input type="text" className="form-control" aria-describedby="startTime" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="startDate">*End Date</label>
                  <input type="text" className="form-control" aria-describedby="startDate" />
                </div>
                <div className="col">
                  <label htmlFor="startTime">*End Time</label>
                  <input type="text" className="form-control" aria-describedby="startTime" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12 category">
                  <label htmlFor="primaryCategory">*Primary Category</label>
                  <select className="form-control custom-select">
                    <option selected>Category</option>
                    <option>Fashion</option>
                    <option>Paegants</option>
                    <option>Religion</option>
                    <option>Concert</option>
                    <option>Wedding</option>
                    <option>Launching</option>
                    <option>Campaign</option>
                    <option>Awards</option>
                    <option>Politics</option>
                    <option>Party</option>
                    <option>Fundraiser</option>
                    <option>Thanksgiving</option>
                    <option>Conference</option>
                  </select>
                </div>
                <div className="col-md-6 col-sm-12 category">
                  <label htmlFor="secondaryCategory">Secondary Category</label>
                  <select className="form-control custom-select">
                    <option selected>Category</option>
                    <option>Fashion</option>
                    <option>Paegants</option>
                    <option>Religion</option>
                    <option>Concert</option>
                    <option>Wedding</option>
                    <option>Launching</option>
                    <option>Campaign</option>
                    <option>Awards</option>
                    <option>Politics</option>
                    <option>Party</option>
                    <option>Fundraiser</option>
                    <option>Thanksgiving</option>
                    <option>Conference</option>
                  </select>
                </div>
              </div><hr />
              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-6 pt-0">*Type of Event</legend>
                  <div className="col-sm-6">
                    <div className="form-check">
                      <input onclick="document.getElementById('online').disabled = false; document.getElementById('onsite').disabled = true; document.getElementById('onsiteAddress').disabled = true;" className="form-check-input" type="radio" name="type" defaultValue="option1" />
                      <label className="form-check-label" htmlFor="onlineEvent">
                        Online
                        </label>
                      <input type="text" className="form-control" name="custom" id="online" placeholder="link" />
                    </div>
                    <div className="form-check">
                      <input onclick="document.getElementById('onsite').disabled = false; document.getElementById('onsiteAddress').disabled = false; document.getElementById('online').disabled = true;" className="form-check-input" type="radio" name="type" defaultValue="option2" />
                      <label className="form-check-label" htmlFor="onsiteEvent">
                        Onsite
                        </label>
                      <input type="text" className="form-control" name="facility" id="onsite" placeholder="Name of facility" />
                      <input type="text" className="form-control" name="address" id="onsiteAddress" placeholder="Address" />
                      <input type="text" className="form-control" name="address" placeholder="State" />
                      <input type="text" className="form-control" name="address" placeholder="Country" />
                    </div>
                    <div className="form-check">
                      <input onclick="document.getElementById('online').disabled = false; document.getElementById('onsite').disabled = false; document.getElementById('onsiteAddress').disabled = false;" className="form-check-input" type="radio" name="gridRadios" defaultValue="option3" />
                      <label className="form-check-label" htmlFor="gridRadios3">
                        Both
                        </label>
                    </div>
                  </div>
                </div>
              </fieldset><hr />
              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-6 pt-0">*Who can attend this event?</legend>
                  <div className="col-sm-6">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" />
                      <label className="form-check-label" htmlFor="gridRadios1">
                        Open
                        </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
                      <label className="form-check-label" htmlFor="gridRadios2">
                        Strictly by Invitation
                        </label>
                    </div>
                  </div>
                </div>
              </fieldset><hr />
              <div className="form-group pb-2">
                <label htmlFor="eventName">Ticket</label>
                <div className="row">
                  <div className="col-6">
                    <input type="text" className="form-control" aria-describedby="eventname" placeholder="Name of Ticket Provider" />
                  </div>
                  <div className="col-6">
                    <input type="url" className="form-control" aria-describedby="eventname" placeholder="Ticket URL" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <input type="text" className="form-control" aria-describedby="eventname" placeholder="Name of Ticket Provider" />
                  </div>
                  <div className="col-6">
                    <input type="url" className="form-control" aria-describedby="eventname" placeholder="Ticket URL" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <input type="text" className="form-control" aria-describedby="eventname" placeholder="Name of Ticket Provider" />
                  </div>
                  <div className="col-6">
                    <input type="url" className="form-control" aria-describedby="eventname" placeholder="Ticket URL" />
                  </div>
                </div>
              </div>
              <div className="form-group pb-2">
                <label htmlFor="eventDescription">Additional Information(If Any?)</label>
                <textarea className="form-control" rows={4} placeholder="250 words max" defaultValue={""} />
              </div>
              <div className="form-group pb-2">
                <label htmlFor="eventDescription">Upload Cover Photo (Cover Photo must exclude dates and time and venue of events).</label>
                <div className="custom-file">
                  <input type="file" className="custom-file-input" accept="image/*" />
                  <label className="custom-file-label" htmlFor="customFile">Choose Photo</label>
                </div>
              </div>
              <div className="form-group pb-2">
                <label htmlFor="eventDescription">Upload Presentation Video</label>
                <div className="custom-file">
                  <input type="file" className="custom-file-input" accept="video/*" />
                  <label className="custom-file-label" htmlFor="customFile">Choose Video</label>
                </div>
              </div>
              <div className="form-group pb-2">
                <label htmlFor="eventDescription">Upload Event Photos and Videos</label>
                <div className="custom-file">
                  <input type="file" className="custom-file-input" />
                  <label className="custom-file-label" htmlFor="customFile">Choose File</label>
                </div>
              </div>
              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-6 pt-0">*How do you want to publish this event?</legend>
                  <div className="col-sm-6">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" />
                      <label className="form-check-label" htmlFor="gridRadios1">
                        Public(Anyone can see)
                        </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
                      <label className="form-check-label" htmlFor="gridRadios2">
                        Private(Only those I invite)
                        </label>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div className="row">
                <div className="col">
                  <button className="btn btn-md btn-banner btn-block" type="submit">Submit for Review</button>
                </div>
                <div className="col">
                  <button className="btn btn-md btn-banner btn-block">Save as Draft</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default PostEvent;
