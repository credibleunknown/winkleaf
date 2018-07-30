import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CheckAuth from './utils/checkAuth';
import Header from './components/header';
import LandingPage from './components/views/landingPage';
import EditProfile from './components/views/editProfile';
import EventStories from './components/views/eventStories';
import Authentication from './components/views/authentication';
import AccountFollowers from './components/views/accountFollowers';
import Following from './components/views/following';
import PostEvent from './components/views/postEvent';
import MyEvents from './components/views/myEvents';
import CategoryPreference from './components/views/categoryPreference';
import EventDetails from './components/views/eventDetails';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={LandingPage} exact={true} />
              <Route path="/authentication" component={Authentication} exact={true} />
              <Route path="/event-stories" component={EventStories} exact={true} />
              <Route path="/edit-profile" component={CheckAuth(EditProfile)} exact={true} />
              <Route path="/post-event" component={CheckAuth(PostEvent)} exact={true} />
              <Route path="/account-followers" component={CheckAuth(AccountFollowers)} exact={true} />
              <Route path="/following" component={CheckAuth(Following)} exact={true} />
              <Route path="/my-events" component={CheckAuth(MyEvents)} exact={true} />
              <Route path="/category-preference" component={CheckAuth(CategoryPreference)} exact={true} />
              <Route path="/event-details" component={EventDetails} exact={true} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
