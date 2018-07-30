import React, { Component } from 'react';
import Banner from '../banner';
import EventStory from '../eventStory';
import EventMenu from '../eventMenu';

class EventStories extends Component {
  render() {
    return (
      <div>
        <Banner />
        <EventMenu />
        <section className="container-fluid events-category">
          <div className="container">
            <div className="row">
              <EventStory />
              <EventStory />
              <EventStory />
              <EventStory />
              <EventStory />
              <EventStory />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default EventStories;
