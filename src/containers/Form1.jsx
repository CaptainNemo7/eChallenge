import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postForm1 } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

/*
	- username
	- password
	-	email address
	- button to FORM2
*/

class Form1 extends Component {
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

    this.onFormSubmit = this.onFormSubmit.bind(this);
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

  onFormSubmit(event) {
    // event.preventDefault();
    console.log('hit ', this.props)
    // this.props.postForm1(this.state);
  }

  render() {
    // {console.log(this.props)}
    return (
      <div>
        <h1>Form1</h1>
        <form
          onSubmit={this.onFormSubmit}
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

      
          <Link 
            onClick={() => this.props.postForm1(this.state)}
            type='submit' 
            className='btn btn-primary' 
            to="/form2">
            Save and Continue to Form 2
          </Link>
  
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state)
  return { list: state.list}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postForm1: postForm1 }, dispatch);
}

// export default connect(mapStateToProps)(Form1);
export default connect(mapStateToProps, mapDispatchToProps)(Form1);

