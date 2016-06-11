import React, { Component, PropTypes } from 'react';

export default class Shout extends Component {
  render() {
    return (
      <div className='card shout-component'>
        <div className='card-content'>
          <span className='card-title'>
            <span className='fullname'>{this.props.name}</span>
            <span className='username'>@{this.props.username}</span>
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
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};
