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
          <span className='fullname'>{`${profile.firstName} ${profile.lastName}`}</span>
          <span className='username'>@{this.props.username}</span>
        </div>
        <div className='col s12 user-stats'>
          <div className='col s4'>
            <span className='shouts-count-label count-label'>shouts</span>
            <span className='shouts-count count-value'>0</span>
          </div>
          <div className='col s4'>
            <span className='followers-count-label count-label'>shouts</span>
            <span className='folowers-count count-value'>0</span>
          </div>
          <div className='col s4'>
            <span className='following-count-label count-label'>shouts</span>
            <span className='following-count count-value'>0</span>
          </div>
        </div>
      </div>
    );
  }

};

UserProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  username: PropTypes.string
}
