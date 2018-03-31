import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectExampleBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

/*
	- first name
	- last name
	-	phone number
	- button to FORM3
*/

export default class Form2 extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div>Form2 works</div>
        <Link to="/form3">Save and Continue to Form 3</Link>
      </div>
    );
  }
}