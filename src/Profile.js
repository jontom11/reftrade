import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

class Profile extends Component {
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
    return (
      <div> 
        <h3>You Got the Route Baby!</h3>
        <button onTouchTap={()=>console.log(this.state)}>See State</button>
        <div>
          <TextField
            floatingLabelText="Your First and Last Name"
            /*errorText="This field is required"*/
            onChange={this.yourNameChange}
          />
        </div>
        <div>
          <TextField
            floatingLabelText="Your Email Address"
            onChange={this.yourEmailChange}
          />
        </div>
        <div>
          <TextField
            floatingLabelText="Your Phone Number"
            onChange={this.yourPhoneChange}
          />
        </div>
        <div>
          <TextField
            floatingLabelText="Referral's First and Last Name"
            onChange={this.theirNameChange}
          />
        </div>
        <div>
          <TextField
            floatingLabelText="Referral's Email Address"
            onChange={this.theirEmailChange}
          />
        </div>
        <div>
          <TextField
            floatingLabelText="Referral's Phone Number"
            onChange={this.theirPhoneChange}
          />
        </div>



      </div>
    )
  }

}

export default Profile;