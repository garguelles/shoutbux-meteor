import React, {Component} from 'react';
import { Link } from 'react-router';

export default class AuthHeader extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <Link className='brand-logo center' to='/'>ShoutBux</Link>
          </div>
        </nav>
      </div>
    );
  }
}
