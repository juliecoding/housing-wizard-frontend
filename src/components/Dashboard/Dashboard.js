import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation'
import axios from 'axios'

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      properties: []
    }
  }

  getAllProperties = () => {
    axios
    .get('http://localhost:3200/api/properties')
    .then(response => this.setState({ properties: response.data }))
  }

  componentWillMount() {
    this.getAllProperties();
  }

  render () {
    return (
      <div>
        <Navigation />
        <button>Add new property</button>
        <input placeholder="filter by price" /><button>Filter</button>
        <h1>Properties, people!</h1>
        <div>(properties go here)</div>
      </div>
    )
  }
}

export default Dashboard;
