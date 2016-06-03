import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to='auth/login'>Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
