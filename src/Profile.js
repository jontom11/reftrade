import React, {Component} from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom';
import Referral from './Referral';

class Profile extends Component {

  render() {
    return (
      <div>Back at the Profilio
        <Link to='ReferralPage'>
          Refer Someone
        </Link>
      </div>
    )
  }
}

export default Profile;