import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <div>
        <div>Welcome Jonathan</div>
        <Link to='profilePage d'> 
          Click Here to go to Profile Page
        </Link>          

      </div>

    )
  }
}

export default Login;