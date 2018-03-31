import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectExampleBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

/*
	- username
	- password
	-	email address
	- button to FORM2
*/

export default class Form1 extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div>Form1 works</div>
        <Link to="/form2">Save and Continue to Form 2</Link>
      </div>
    );
  }
}