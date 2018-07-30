import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { UncontrolledAlert, TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import SignupForm from './signupForm';
import Loading from '../loading';
import ForgotPassword from './forgotPassword';
import classnames from 'classnames';
import loginValidator from '../../validation/loginValidator';
import loginUser from '../../actions/loginUser';


class Authentication extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.onForgotPassword = this.onForgotPassword.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      username: '',
      password: '',
      errors: {}
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      const { username, password } = this.state;
      this.props.login({ username, password });
      this.setState({ errors: {} });

      if (this.props.authenticated) {
        this.props.history.push('/my-events');
      }
    }
  }

  isValid() {
    const { errors, isValid } = loginValidator(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }


  render() {
    const { errors, username, password } = this.state;
    const { errorMessage, fetching } = this.props;
    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-8 offset-md-2 auth-form">
            <Nav tabs className="nav nav-tabs">
              <NavItem className="nav-item">
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  Log In
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Sign Up
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab} className="tab-content">
              {/* Login */}
              <TabPane tabId="1" className="tab-pane">
                {/* Error Messages */}
                <div className="container error-body">
                  <br/>
                  {errors.username &&
                    <UncontrolledAlert color="warning">
                    {errors.username}
                    </UncontrolledAlert>
                  }
                  {errorMessage &&
                     <UncontrolledAlert color="warning">
                    {errorMessage}
                    </UncontrolledAlert>
                  }
                  {errors.password &&
                    <UncontrolledAlert color="warning">
                    {errors.password}
                    </UncontrolledAlert>
                  }
                  <br />
                </div>
                <form className="form-signin mt-2 mb-5 pb-2" onSubmit={this.handleSubmit}>
                  <div className="form-title">
                    <h5 className="text-center">Log in to your account</h5>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputusername" className="sr-only">username</label>
                    <input 
                      type="text" 
                      name= "username"
                      className="form-control" 
                      placeholder="username" 
                      value={username}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input 
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.onChange} 
                      className="form-control" 
                      placeholder="Password" 
          
                    />
                  </div>
                  <p className="text-center">By clicking Log In, you agree to our 
                    <a href="/"> Terms of Use</a> and our 
                    <a href="/"> Privacy Policy</a>.
                  </p>
                  <button 
                    type="submit"
                    disabled={fetching}
                    className="btn btn-md btn-banner btn-block" 
                    >
                    <span> {fetching && <Loading/>} Log in</span>
                  </button>
                  <ForgotPassword />
                </form>
              </TabPane>

              {/* Sign up */}
              <TabPane tabId="2" className="tab-pane">
                <SignupForm />
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div>
    );
  }
}

Authentication.propTypes = {
  login: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  authenticated: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};
Authentication.defaultProps = {
  errorMessage: null,
  history: {
    push: () => { }
  }
};

const mapStateToProps = state => ({
  authenticated: state.auth.isAuthenticated,
  errorMessage: state.auth.errorMessage,
  fetching: state.isFetching
});
const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
