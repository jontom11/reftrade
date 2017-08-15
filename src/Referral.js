import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import avatarImage from './jonathan.jpg';
import {BrowserRouter as Route, Link} from 'react-router-dom';

class Referral extends Component {
  constructor () {
    super();
    this.state = {
      yourName: null,
      yourEmail: null,
      yourPhone: null,
      theirName: null,
      theirEmail: null,
      theirPhone: null,
    }
    this.yourNameChange = this.yourNameChange.bind(this);
    this.yourEmailChange = this.yourEmailChange.bind(this);
    this.yourPhoneChange = this.yourPhoneChange.bind(this);
    this.theirNameChange = this.theirNameChange.bind(this);
    this.theirEmailChange = this.theirEmailChange.bind(this);
    this.theirPhoneChange = this.theirPhoneChange.bind(this);
  }

  yourNameChange(a) {
    this.setState({yourName: a.target.value})
  }
  yourEmailChange(b) {
    this.setState ({yourEmail: b.target.value})
  }
  yourPhoneChange(c) {
    this.setState({yourPhone: c.target.value})
  }
  theirNameChange(d) {
    this.setState ({theirName: d.target.value})
  }
  theirEmailChange(e) {
    this.setState ({theirEmail: e.target.value})
  }
  theirPhoneChange(f) {
    this.setState({theirPhone: f.target.value})
  }
 
  render() {
    let avatarStyle = {width: '300px'};
    let floatStyle = {
      fontFamily: 'Ubuntu', 
      color: '#ddd'
    }
    let textStyle = {
      fontFamily: 'Ubuntu', 
      color: '#ffe',
    };

    return (
      <div id="Referral"> 
        <div><Link to='ProfilePage'>Profile Page</Link> </div>
        <div><Link exact={true} to='/'>Home Page</Link></div>
        <h2 id='ReferralHeader'>You Got the Route Baby!</h2>
        <div><img src={avatarImage} style={avatarStyle} alt={'missing'}/></div>
        <button onTouchTap={()=>console.log(this.state)}>See State</button>
        <div>
          <TextField
            floatingLabelText="Your First and Last Name"
            onChange={this.yourNameChange}
            floatingLabelStyle = {floatStyle}
            inputStyle = {textStyle}
          />
        </div>
        <div>
          <TextField
            floatingLabelText="Your Email Address"
            onChange={this.yourEmailChange}
            floatingLabelStyle = {floatStyle}
            inputStyle = {textStyle}
          />
        </div>
        <div>
          <TextField
            floatingLabelText="Your Phone Number"
            onChange={this.yourPhoneChange}
            floatingLabelStyle = {floatStyle}
            inputStyle = {textStyle}
          />
        </div>
        <div>
          <TextField
            floatingLabelText="Referral's First and Last Name"
            onChange={this.theirNameChange}
            floatingLabelStyle = {floatStyle}
            inputStyle = {textStyle}
          />
        </div>
        <div>
          <TextField
            floatingLabelText="Referral's Email Address"
            onChange={this.theirEmailChange}
            floatingLabelStyle = {floatStyle}
            inputStyle = {textStyle}
          />
        </div>
        <div>
          <TextField
            floatingLabelText="Referral's Phone Number"
            onChange={this.theirPhoneChange}
            floatingLabelStyle = {floatStyle}
            inputStyle = {textStyle}
          />
        </div>
      </div>
    )
  }
}

export default Referral;