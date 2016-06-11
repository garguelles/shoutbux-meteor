import React, { Component, PropTypes } from 'react';

export default class Shout extends Component {

  _getFullName() {
    let profile = this.props.user.profile;
    return `${profile.firstName} ${profile.lastName}`;
  }

  render() {
    return (
      <div className='card shout-component'>
        <div className='card-content'>
          <span className='card-title'>
            <span className='fullname'>{this._getFullName()}</span>
            <span className='username'>@{this.props.user.username}</span>
          </span>
          <p className='shout-bofy'>
            {this.props.body}
          </p>
        </div>
        <div className='card-action'>
          <a href="#">Edit</a>
          <a href="#">Remove</a>
        </div>
      </div>
    );
  }
}

Shout.propTypes = {
  body: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  user: PropTypes.object
};
