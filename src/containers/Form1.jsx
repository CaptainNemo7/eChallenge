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

    this.state = {
      username: '',
      password: '',
      email: '',
    }
    
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
  }

  onUsernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  onPasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  onEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  render() {
    return (
      <div>
        <div>Form1 works</div>
        <form 
          className='input-group'
        >
          <input
            placeholder='Enter Username'
            className='form-control'
            value={this.state.username}
            onChange={this.onUsernameChange}
          />

          <input
            placeholder='Enter Password'
            className='form-control'
            value={this.state.password}
            onChange={this.onPasswordChange}
          />

          <input
            placeholder='Enter Email'
            className='form-control'
            value={this.state.email}
            onChange={this.onEmailChange}
          />

          <span className="input-group-btn">
            <Link type='submit' className='btn btn-secondary' to="/form2">
              Save and Continue to Form 2
            </Link>
          </span>     
        </form>
      </div>
    );
  }
}