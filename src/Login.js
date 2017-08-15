import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <div>
        <div>The Referrals Trade</div>
        <Link to='profilePage'> 
          Click Here to go to Profile Page
        </Link>          

      </div>

    )
  }
}

export default Login;