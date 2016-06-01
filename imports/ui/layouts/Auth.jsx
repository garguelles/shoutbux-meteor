import React, { Component } from 'react';
import AuthHeader from '../components/auth/Header';

export default class extends Component {
  render() {
    return (
      <div className='auth-container'>      
        <AuthHeader/>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
