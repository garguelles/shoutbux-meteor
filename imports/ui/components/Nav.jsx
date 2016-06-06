import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { Meteor } from 'meteor/meteor';

class Nav extends Component {

  _logout(event) {
    event.preventDefault();
    Meteor.logout((error) => {
      if (error) {
        alert(error.reason);
      } else {
        this.props.router.replace('/');
      }
    })
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href='#' onClick={this._logout.bind(this)}>Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
