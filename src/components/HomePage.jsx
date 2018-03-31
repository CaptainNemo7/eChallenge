import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* landing page 
	- welcome
	- start form button to the FIRST FORM
*/

const HomePage = (props) => {
  return (
    <div>
    	<h1>To Forms - form1</h1>
    	<Link to="/form1">Go To form1</Link>
      <h1>Test</h1>
      <Link to="/tests">Go To Test Page</Link>
    </div>
  )
}


export default HomePage;