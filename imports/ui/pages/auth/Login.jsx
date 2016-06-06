import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

class Login extends Component {

  constructor() {
    super();
  }

  _login(event) {
    event.preventDefault();
    Meteor.loginWithPassword(this._username.value, this._password.value, (error) => {
      if (error) {
        Materialize.toast(error.reason, 3000, 'error');
      } else {
        let { location } = this.props;
        if (location.state && location.state.nextPathname) {
          this.props.router.replace(location.state.nextPathname)
        } else {
          this.props.router.replace('/app')
        }
      }
    });
  }

  render() {
    return (
      <div className='login-page row'>
        <form className='login-form' onSubmit={this._login.bind(this)}>
          <div className='row'>
            <div className='input-field col s12'>
              <input ref={(input) => this._username = input} type='text' className='validate' id='username' />
              <label for='username'>Username</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input ref={(input) => this._password = input} type='password' className='validate' id='password' />
              <label for='password'>password</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <div className='row'>
                <div className='col s12'>
                  <button type='submit' className='right waves-effect waves-light btn'>Login</button>
                </div>
                <div className='col s12'>
                  <Link className='right signup-link' to='signup'>Create an account</Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Login)
