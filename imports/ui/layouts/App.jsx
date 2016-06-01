import React, { Component } from 'react';
import Nav from '../components/Nav';

export default class App extends Component {

  render() {
    return (
      <div class='main'>
        <Nav />
        <div className='container'>
          <h3>test layout</h3>
          {this.props.children}
        </div>
      </div>
    );
  }
}