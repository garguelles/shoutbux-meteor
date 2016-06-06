import React, { Component } from 'react';
import Nav from '../components/Nav';
import { Meteor } from 'meteor/meteor';

export default class App extends Component {

  constructor() {
    super();
    this._user = Meteor.user();
  }

  render() {
    return (
      <div class='main'>
        <Nav />
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
