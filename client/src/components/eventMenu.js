import React from 'react';
import {NavLink} from 'react-router-dom';

const EventMenu = () => (
  <div className="container-fluid mt-2 sticky-top">
    <div className="row justify-content-center event-menu-section">
      <div className="nav-scroller event-menu">
        <nav className="nav nav-underline">
          <NavLink className="nav-link" activeClassName="active" to="/" exact={true}>Events Pool</NavLink>
          <NavLink className="nav-link" activeClassName="active" to="event-stories">Event Stories</NavLink>
        </nav>
      </div>
    </div>
  </div>
);

export default EventMenu;
