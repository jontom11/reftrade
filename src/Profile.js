import React, {Component} from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

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