import React, {Component} from 'react';
import NavLink from './NavLink';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><NavLink to="/" onlyActiveOnIndex>TODO Home</NavLink></li>
          <li><NavLink to="/lists">Lists</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
