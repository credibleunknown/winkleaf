import React, { Component } from 'react';
import logo from '../img/logo-alt.png'


class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="container-fluid py-3 bg-dark">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <img src={logo} alt="footer logo" className="img-fluid footer-logo" />
              <span className="slogan">...Make history!</span>
            </div>
            <div className="col-12 pt-2">
              <small>&copy; 2018. All Rights Reserved</small>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;