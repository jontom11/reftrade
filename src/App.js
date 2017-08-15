import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Profile from './Profile';
import Login from './Login'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            <Route exact={true} path ='/' component={Login} />
            <Route path ='/profilePage' component={Profile} />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
