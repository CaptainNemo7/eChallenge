import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postForm2 } from '../actions/index';

import { Link } from 'react-router-dom';

/*
	- first name
	- last name
	-	phone number
	- button to FORM3
*/

class Form2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
    }
    
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);

  }

  onFirstNameChange(event) {
    this.setState({
      firstName: event.target.value
    })
  }

  onLastNameChange(event) {
    this.setState({
      lastName: event.target.value
    })
  }

  onPhoneChange(event) {
    this.setState({
      phone: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Form2</h1>
        <form 
          className='input-group'
        >
          <input
            placeholder='Enter First Name'
            className='form-control'
            value={this.state.firstName}
            onChange={this.onFirstNameChange}
          />

          <input
            placeholder='Enter Last Name'
            className='form-control'
            value={this.state.lastName}
            onChange={this.onLastNameChange}
          />

          <input
            placeholder='Enter Phone Number'
            className='form-control'
            value={this.state.phone}
            onChange={this.onPhoneChange}
          />


          <Link
            onClick={() => this.props.postForm2(this.state)}
            type='submit' 
            className='btn btn-primary' 
            to="/form3"
          >
            Save and Continue to Form 3
          </Link>
  
        </form>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { list: state.list};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postForm2: postForm2 }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form2);
