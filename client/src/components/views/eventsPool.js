import React, { Component } from 'react';
import SuggestedEvents from './suggestedEvents';
import UpcomingEvents from './upcomingEvents';
import PastEvents from './pastEvents';

class EventsPool extends Component {
  render() {
    return (
      <div>
        <SuggestedEvents />
        <UpcomingEvents />
        <PastEvents />
      </div>
    );
  }
}

export default EventsPool;
