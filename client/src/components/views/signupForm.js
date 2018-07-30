import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UncontrolledAlert } from 'reactstrap';
import PropTypes from 'prop-types';
import Loading from '../loading';
import signupValidator from '../../validation/signupValidator';
import signupUser from '../../actions/signupUser';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
 
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  onSubmit(event) {
    event.preventDefault();
    if (this.isValid()) {
      const { username, email, phone, password, confirmPassword } = this.state;
      this.props.signup({ username, email, phone, password, confirmPassword });
      this.setState({ errors: {} });

      if (this.props.authenticated) {
        this.props.history.push('/');
      }
    }
  }
  
  isValid() {
    const { isValid, errors } = signupValidator(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
 
  render() {
    const {
      errors,
      username,
      email,
      phone,
      password,
      confirmPassword
    } = this.state;
    const { fetching, errorMessage } = this.props;
    return (
      <div>
        <div className="container error-body">
          {errors.username &&
            <UncontrolledAlert color="warning">
              {errors.username}
            </UncontrolledAlert>
          }
          {errors.email &&
            <UncontrolledAlert color="warning">
              {errors.email}
            </UncontrolledAlert>
          }
          {errors.phone &&
            <UncontrolledAlert color="warning">
              {errors.phone}
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
          {errors.confirmPassword &&
            <UncontrolledAlert color="warning">
              {errors.confirmPassword}
            </UncontrolledAlert>
          }
        </div>
        <form className="form-signin mt-2 mb-5 pb-5" onSubmit={this.onSubmit}>
          <div className="form-title">
            <h5 className="text-center">Create an account</h5>
          </div>
          <div className="form-group">
            <label htmlFor="inputusername" className="sr-only">username</label>
            <input 
              type="text" 
              name="username"
              value={username}
              onChange={this.onChange}
              className="form-control" 
              placeholder="username" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword" className="sr-only">Email address</label>
            <input 
              type="email" 
              name= 'email'
              value={email}
              onChange={this.onChange}
              className="form-control" 
              placeholder="Email address" 
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputPhoneNumber" className="sr-only">Phone Number</label>
            <input 
              type="number"
              name="phone" 
              value={phone}
              onChange={this.onChange}
              className="form-control" 
              placeholder="Phone number" 
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
          <div className="form-group">
            <label htmlFor="inputPasswordConfirmation" className="sr-only">Confirm Password</label>
            <input 
              type="password"
              name="confirmPassword" 
              value={confirmPassword}
              onChange={this.onChange}
              className="form-control" 
              placeholder="Confirm password" 
            />
          </div>
          <p className="text-center">By creating an account, you agree to our
            <a href="/">Terms of Use</a> and our
            <a href="/">Privacy Policy</a>.
          </p>
          <button 
            type="submit" 
            className="btn btn-md btn-banner btn-block"
            disabled={fetching}
          >
            Sign up {fetching && <Loading/>}
          </button>
        </form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  signup: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  authenticated: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

SignupForm.defaultProps = {
  errorMessage: '',
  history: {
    push: () => { }
  }
};

const mapStateToProps = state => ({
  errorMessage: state.auth.errorMessage,
  authenticated: state.auth.isAuthenticated,
  fetching: state.isFetching
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch((signupUser(user)))
});


export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
