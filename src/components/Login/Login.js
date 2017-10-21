import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import houseIcon from '../../houseIcon.png';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    }
  }

  register = () => {
    let {username, password} = this.state;

    axios.post('http://localhost:3200/api/auth/register', {
      username,
      password
    })
  }

  login = () => {
    let {username, password} = this.state;

    axios.post('http://localhost:3200/api/auth/login', {
      username,
      password
    })
  }

  render() {
    return(
      <div className='login-main'>
        <div className='login-center'>
          <img src={ houseIcon } />
          <div className='user-input'>
            <label for="usernameInput">User Name</label>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => this.setState({username: e.target.value})}
              ></input>
          </div>
          <div className='user-password'>
            <label for="passwordInput">Password</label>
            <input
              type="text"
              placeholder="Password"
              onChange={(e) => this.setState({password: e.target.value})}
            ></input>
          </div>
          <div className="login-and-register">
            <Link to="/dashboard"><button onClick={ this.login }>Login</button></Link>
            <Link to="/dashboard"><button onClick={ this.register } >Register</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
