import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectExampleBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

/*
	- street address
	- city
	-	state
	- zip
	- button to landing page
*/

export default class Form3 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      street: '',
      city: '',
      state: '',
      zip: ''
    }
    
    this.onStreetNameChange = this.onStreetNameChange.bind(this);
    this.onCityNameChange = this.onCityNameChange.bind(this);
    this.onStateNameChange = this.onStateNameChange.bind(this);
    this.onZipChange = this.onZipChange.bind(this);
  }

  onStreetNameChange(event) {
    this.setState({
      street: event.target.value
    })
  }

  onCityNameChange(event) {
    this.setState({
      city: event.target.value
    })
  }

  onStateNameChange(event) {
    this.setState({
      state: event.target.value
    })
  }

  onZipChange(event) {
    this.setState({
      zip: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Form3</h1>
        <form 
          className='input-group'
        >
          <input
            placeholder='Enter Street Name'
            className='form-control'
            value={this.state.street}
            onChange={this.onStreetNameChange}
          />

          <input
            placeholder='Enter City'
            className='form-control'
            value={this.state.city}
            onChange={this.onCityNameChange}
          />

          <input
            placeholder='Enter State'
            className='form-control'
            value={this.state.state}
            onChange={this.onStateNameChange}
          />

          <input
            placeholder='Enter Zip Code'
            className='form-control'
            value={this.state.zip}
            onChange={this.onZipChange}
          />

          <Link type='submit' className='btn btn-primary' to="/">
            Save and Continue Home
          </Link>
        </form>
      </div>
    );
  }
}