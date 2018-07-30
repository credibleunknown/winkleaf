import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UncontrolledDropdown, UncontrolledCollapse, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import logo from '../img/logo.png';
import logOutUser from '../actions/logoutUser';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logOutUser();
    this.props.history.push('/');
  }

  render() {
    if (this.props.authenticated) {
      return (
        <div>
          <header>
            <nav className="navbar navbar-expand-lg navbar-default bg-white shadow">
              <NavLink className="navbar-brand" to="/">
                <img src={logo} className="img-fluid logo" alt="winkleaf logo" />
              </NavLink>
              {/* Mobile Logged In User Menu */}
              <div className="dropleft mobile-main-menu">
                <UncontrolledDropdown>
                  <DropdownToggle> MAIN MENU</DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem><NavLink to="/">HOME</NavLink></DropdownItem>
                    <DropdownItem><NavLink to="/post-event">POST EVENT</NavLink></DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem header className="bold-text">username</DropdownItem>
                    <DropdownItem><NavLink to="/edit-profile">Edit Profile</NavLink></DropdownItem>
                    <DropdownItem><NavLink to="/account-followers">Account Folowers</NavLink></DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem header className="bold-text">MANAGE EVENTS</DropdownItem>
                    <DropdownItem><NavLink to="/my-events">My Events</NavLink></DropdownItem>
                    <DropdownItem><NavLink to="/following">Following</NavLink></DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem header className="bold-text">SETTINGS</DropdownItem>
                    <DropdownItem><NavLink to="/category-preference">Category Preference</NavLink></DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem header className="bold-text">WINKLEAF</DropdownItem>
                    <DropdownItem><NavLink to="/privacy-policy">Privacy Policy</NavLink></DropdownItem>
                    <DropdownItem><NavLink to="/terms">Terms of service</NavLink></DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <NavLink 
                        to="/"
                        onClick={this.handleLogout}
                      >Log Out</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              {/* End of Mobile Logged in User Menu */}
              <button className="navbar-toggler" id="toggler" data-toggle="collapse">
                <span className="fa fa-bars mobile-bar" />
              </button>
              <UncontrolledCollapse className="collapse navbar-collapse main-menu" toggler="#toggler">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item user-menu">
                    <UncontrolledDropdown direction="left">
                      <DropdownToggle caret> MAIN MENU</DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem><NavLink to="/">HOME</NavLink></DropdownItem>
                        <DropdownItem><NavLink to="/post-event">POST EVENT</NavLink></DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem header className="bold-text">username</DropdownItem>
                        <DropdownItem><NavLink to="/edit-profile">Edit Profile</NavLink></DropdownItem>
                        <DropdownItem><NavLink to="/account-followers">Account Folowers</NavLink></DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem header className="bold-text">MANAGE EVENTS</DropdownItem>
                        <DropdownItem><NavLink to="/my-events">My Events</NavLink></DropdownItem>
                        <DropdownItem><NavLink to="/following">Following</NavLink></DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem header className="bold-text">SETTINGS</DropdownItem>
                        <DropdownItem><NavLink to="/category-preference">Category Preference</NavLink></DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem header className="bold-text">WINKLEAF</DropdownItem>
                        <DropdownItem><NavLink to="/privacy-policy">Privacy Policy</NavLink></DropdownItem>
                        <DropdownItem><NavLink to="/terms">Terms of service</NavLink></DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          <NavLink
                            to="/"
                            onClick={this.handleLogout}
                          >Log Out</NavLink>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </li>
                </ul>
              </UncontrolledCollapse>
            </nav>
            {this.props.children}
          </header>
        </div>
      );
    } //End of authentication check
    
    return (
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-lg navbar-default bg-white shadow">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} className="img-fluid logo" alt="winkleaf logo" />
            </NavLink>
            <button className="navbar-toggler" id="toggler" data-toggle="collapse">
              <span className="fa fa-bars mobile-bar" />
            </button>
            <UncontrolledCollapse className="collapse navbar-collapse main-menu" toggler="#toggler">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/">HOME <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/post-event">POST EVENT</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">SHARE</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/authentication">LOG IN/SIGN UP</NavLink>
                </li>
              </ul>
            </UncontrolledCollapse>
          </nav>
          {this.props.children}
        </header>
      </div>
    );

  }
}

Header.propTypes = {
  logOutUser: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
Header.defaultProps = {
  history: {
    push: () => { }
  }
};
const mapStateToProps = state => ({
  authenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logOutUser })(Header);
