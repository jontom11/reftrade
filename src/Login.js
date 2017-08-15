import React, {Component} from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div>
        <div>The Referrals Trade</div>
          <Link to='ReferralPage'>Refer Someone</Link>

      </div>
    )
  }
}

export default Login;