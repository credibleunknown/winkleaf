import React, { Component } from 'react';
import Banner from '../banner';
import EventsPool from './eventsPool';
import EventMenu from '../eventMenu';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Banner />
        <EventMenu />
        <EventsPool />
      </div>
    );
  }
}

export default LandingPage;
