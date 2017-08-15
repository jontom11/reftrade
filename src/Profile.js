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
    this.nameChange = this.nameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
  }

  nameChange (n) {
    console.log(n.target.value)
    this.setState ({name: n.target.value})
  }

    emailChange (e) {
    console.log(e.target.value)
    this.setState ({email: e.target.value})
  }



  render() {
    return (
      <div> 
        <h3>You Got the Route Baby!</h3>
        <div>
          <TextField
            floatingLabelText="Your First and Last Name"
            /*errorText="This field is required"*/
            onChange={this.nameChange}
          />
        </div>
        <div>
          <TextField
            floatingLabelText="Your Email Address"
            onChange={this.emailChange}
          />
        </div>
        <div>
          <TextField
            floatingLabelText="Your Phone Number"
            onChange={this.emailChange}
          />
        </div>
        <div>
          <TextField
            floatingLabelText="Referral's First and Last Name"
            onChange={this.emailChange}
          />
        </div>
        <div>
          <TextField
            floatingLabelText="Referral's Email Address"
            onChange={this.emailChange}
          />
        </div>
        <div>
          <TextField
            floatingLabelText="Referral's Phone Number"
            onChange={this.emailChange}
          />
        </div>



      </div>
    )
  }

}

export default Profile;