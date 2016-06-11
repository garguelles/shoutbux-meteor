import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Shout from './Shout';

class ShoutList extends Component {

  _renderShouts() {
    return this.props.shouts.map((shout) => (
      <Shout key={shout._id} body={shout.body}
        dataCreated={shout.dataCreated} username={shout.username}
        name={shout.name} />
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

  return {
    shouts: [{
      _id: 'fasdf2342sadf',
      body: 'Hate Typescript!',
      name: 'gerard arguelles',
      username: 'garguelles',
      dateCreated: new Date()
    }, {
      _id: 'fasdf2342sadf21343242',
      body: 'Hate Typescript!',
      name: 'gerard arguelles',
      username: 'gargueles',
      dateCreated: new Date()
    }]
  };
}, ShoutList);
