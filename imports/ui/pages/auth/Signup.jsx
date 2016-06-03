import React, { Component } from 'react';

export default class Signup extends Component {

  render() {
    return (
      <div className='signup-page'>
        <form className='signup-form'>
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
              <input ref={(input) => this._password = input} type='password' id='password' />
              <label for='password'>Password</label>
            </div>
            <div className='input-field col s12'>
              <input ref={(input) => this._confirmPassword = input} type='password' id='confirmPassword' />
              <label for='confirmPassword'>Confirm Password</label>
            </div>
            <div className='input-field col s12'>
              <a className="right waves-effect waves-light btn">Sign Up</a>
            </div>
          </div>
        </form>
      </div>
    );
  }

}
