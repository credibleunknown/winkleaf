import React, { Component } from 'react';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <span>
        <i className="fa fa-spinner fa-spin"></i>
      </span>
    );
  }
}

export default Loading;
