import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { withRouter } from 'react-router';

class Signup extends Component {

  _validatePassword() {
    return this._password.value === this._confirmPassword.value;
  }

  _buildUser() {
    return {
      profile: {
        firstName: this._firstName.value,
        lastName: this._lastName.value
      },
      username: this._username.value,
      email: this._email.value,
      password: this._password.value
    };
  }

  _createAccount(event) {
    event.preventDefault();
    if (this._validatePassword()) {
      let user = this._buildUser();
      Accounts.createUser(user, (error) => {
        if (error) {
          alert(error.reason);
        } else {
          alert('registered');
          this.props.router.replace('/');
        }
      });
    } else {
      alert('password doesn\'t match')
    }

  }

  render() {
    return (
      <div className='signup-page'>
        <form className='signup-form' onSubmit={this._createAccount.bind(this)}>
          <div className='row'>
            <div className='input-field col s12'>
              <input ref={(input) => this._firstName = input} type='text' id='firstname' />
              <label for='firstname'>First Name</label>
            </div>
            <div className='input-field col s12'>
              <input ref={(input) => this._lastName = input} type='text' id='lastname' />
              <label for='lastname'>Last Name</label>
            </div>
            <div className='input-field col s12'>
              <input ref={(input) => this._username = input} type='text' id='username' />
              <label for='username'>Username</label>
            </div>
            <div className='input-field col s12'>
              <input ref={(input) => this._email = input} type='text' id='email' />
              <label for='email'>Email</label>
            </div>
            <div className='input-field col s12'>
              <input ref={(input) => this._password = input} type='password' id='password' />
              <label for='password'>Password</label>
            </div>
            <div className='input-field col s12'>
              <input ref={(input) => this._confirmPassword = input} type='password' id='confirmPassword' />
              <label for='confirmPassword'>Confirm Password</label>
            </div>
            <div className='input-field col s12'>
              <button className='right waves-effect waves-light btn'>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

}

export default withRouter(Signup);
