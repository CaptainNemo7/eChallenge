import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* landing page 
	- welcome
	- start form button to the FIRST FORM
*/

const HomePage = (props) => {
  return (
    <div>
      <h1>Welcome</h1>
      <span className="input-group-btn">
        <Link type='submit' className='btn btn-secondary' to="/form1">
        Click Here To Start
        </Link>
      </span>     
    </div>
  )
}


export default HomePage;