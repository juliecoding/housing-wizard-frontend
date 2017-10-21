import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import Navigation from '../Navigation/Navigation.js';

import { Switch, Route } from 'react-router-dom';

import Wizard1 from '../subWizards/Wizard1';


class Wizard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataz: ""
    }
  }

  render() {
    console.log(this.props.match)

    return(
      <div>
        <Navigation />
        <h1>Start of the wizard, eh?</h1>
        <Switch>
          <Route path={`${this.props.match.path}/1`} component={ Wizard1 } />
        </Switch>
      </div>
    )
  }
}

export default Wizard;
