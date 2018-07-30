import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <p className="text-center pt-3">
          <a onClick={this.toggle}>Forgot Password?</a>
        </p>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Reset your password</ModalHeader>
          <ModalBody>
            <p>Please provide the same email you used while signing up. We will send you a link to reset your password.</p>
            <form>
              <div className="form-group">
                <label htmlFor="inputEmail" className="sr-only">Email Address</label>
                <input type="email" className="form-control" placeholder="Email address" required />
              </div>
              <button className="btn btn-md btn-banner btn-block" type="submit">Submit</button>
            </form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ForgotPassword;
