import React, { PropTypes } from 'react';
import { MenuPaneHeading } from './menu_pane_heading';
import { Link } from 'react-router'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { children } = this.props;
    return (
      <div className="nav navbar">
        <div className="content">
          <h4>WELCOME</h4>
          <ul>

            <li>
              <Link to="/"> Home </Link>
            </li>

            <li>
              <Link to="/about"> About </Link>
            </li>
          </ul>

          {children}

        </div>
      </div>
    );
  }
}
