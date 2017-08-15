import React, {Component} from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom';

class Profile extends Component {
  render() {
    return (
      <div>
        <div>Welcome to the Profile Page</div>
        <Link exact={true} to='/'>Home Page</Link>
      </div>
    )
  }
}

export default Profile;