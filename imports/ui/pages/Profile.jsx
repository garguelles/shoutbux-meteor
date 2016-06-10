import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import UserProfile from '../components/profile/UserProfile';

class Profile extends Component {
  render() {
    const profile = this.props.currentUser ? this.props.currentUser.profile : {};
    const username = this.props.currentUser ? this.props.currentUser.username : '';
    return (
      <div className='profile-page page row'>
        <aside className='col s4'>
          <UserProfile profile={profile} username={username} />
        </aside>
        <div className='col s8'>timeline</div>
      </div>
    );
  }
}

Profile.propTypes = {
  currentUser: PropTypes.object
};

export default createContainer(() => {
  return {
    currentUser: Meteor.user()
  };
}, Profile);
