import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      dataz: ""
    }
  }

  logout = () => axios.post('http://localhost:3200/api/auth/logout');

  render() {
    return(
      <div>
        <p><i>HOUSE PIC</i>Houser</p>
        <p>Dashboard</p>
        <Link to="/" onClick={ this.logout }><button>Logout</button></Link>
      </div>
    )
  }
}

export default Navigation;
