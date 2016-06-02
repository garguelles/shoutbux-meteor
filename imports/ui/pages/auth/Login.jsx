import React, { Component } from 'react';

export default class Login extends Component {

  constructor() {
    super();
  }

  _handleSubmit(event) {
    event.preventDefault();
    console.log('submit');
  }

  render() {
    return (
      <div className='login-page row'>
        <form className='login-form' onSubmit={this._handleSubmit.bind(this)}>
          <div className='row'>
            <div className='input-field col s12'>
              <input ref={(input) => this._username = input} type='text' className='validate' id='username' />
              <label for='username'>Username</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input ref={(input) => this._password = input} type='text' className='validate' id='password' />
              <label for='password'>password</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <button type='submit' className='right waves-effect waves-light btn'>Login</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
