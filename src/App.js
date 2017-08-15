import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Profile from './Profile';
import Referral from './Referral';
import Login from './Login';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
injectTapEventPlugin();


class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            <Route exact={true} path ='/' component={Login} />
            <Route path ='/ProfilePage' component={Profile} />
            <Route path ='/ReferralPage' component={Referral} />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
