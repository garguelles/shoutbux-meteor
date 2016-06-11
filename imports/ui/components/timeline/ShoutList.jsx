import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Shouts } from '../../../api/shouts/shouts';
import Shout from './Shout';

class ShoutList extends Component {

  _renderShouts() {
    return this.props.shouts.map((shout) => (
      <Shout key={shout._id} body={shout.body}
        dateCreated={shout.dateCreated.toString()} user={shout.user()} />
    ));
  }

  render() {
    return (
      <div className='col s12'>
        {this._renderShouts()}
      </div>
    );
  }
}

ShoutList.propTypes = {
  shouts: PropTypes.array
};

export default createContainer(() => {
  Meteor.subscribe('shouts');

  return {
    shouts: Shouts.find({}).fetch()
  };

}, ShoutList);
