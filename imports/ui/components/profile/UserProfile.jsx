import React, { Component, PropTypes } from 'react';

export default class UserProfile extends Component {

  render() {
    const profile = this.props.profile;

    return (
      <div className='row user-profile-component'>
        <div className='col s3'>
          <img src='http://placehold.it/100x100' className='responsive-img profile-image' />
        </div>
        <div className='col s9'>
          <p>{`${profile.firstName} ${profile.lastName}`}</p>
          <p>@{this.props.username}</p>
        </div>
      </div>
    );
  }

};

UserProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  username: PropTypes.string
}
