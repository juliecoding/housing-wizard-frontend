import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return(
      <h1>Say something about your cats!</h1>
    )
  }
}

export default Login;
