import React, { Component } from 'react';
import UpcomingEvent from '../upcomingEvent';

class UpcomingEvents extends Component {
  render() {
    return (
      <section className="container-fluid events-category">
        <div className="text-center section-title">
          <h5>Upcoming Events</h5>
        </div>
				<div className="container">
          <div className="row">
            <UpcomingEvent/>
            <UpcomingEvent />
            <UpcomingEvent />
            <UpcomingEvent />
            <UpcomingEvent />
            <UpcomingEvent />
          </div>
        </div>
      </section>
    );
  }
}

export default UpcomingEvents;
