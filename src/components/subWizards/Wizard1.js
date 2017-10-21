import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

class Wizard1 extends Component {
  constructor() {
    super();

    this.state = {
      dataz: ""
    }
  }

  render() {
    return(
      <div>
        <h1>Step 1</h1>
        <input placeholder="WHAT DO YOU WANT FROM ME, BRO?" />
      </div>
    )
  }
}

export default Wizard1;
