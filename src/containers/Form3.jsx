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
  }
  render() {
    return (
      <div>
        <div>Form3 works</div>
        <Link to="/">Save and Continue Home</Link>
      </div>
    );
  }
}