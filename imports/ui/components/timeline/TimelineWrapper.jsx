import React, { Component } from 'react';
import ShoutPublisher from './ShoutPublisher';
import ShoutList from './ShoutList';

export default class TimelineWrapper extends Component {

  render() {
    return (
      <div className='timeline-wrapper-component row'>
        <div className='col s12'>
          <ShoutPublisher />
        </div>
        <div className='col s12'>
          <ShoutList />
        </div>
      </div>
    );
  }
};
