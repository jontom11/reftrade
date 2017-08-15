import React, {Component} from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom';
import Profile from './Profile.js';

class Login extends Component {
  render() {
    return (
      <div>
        <div>The Referrals Trade</div>
        <Link to='ProfilePage'> 
          Click Here to go to Profile Page
        </Link>          
      </div>
    )
  }
}

export default Login;