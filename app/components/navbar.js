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
      <div className="nav-container">
        <nav classNome="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div id="navbar">
              <ul className="nav navbar-nav">
                <li className="nav-link text-center"><Link to="/"> Home </Link></li>
                <li className="nav-link text-center"><Link to="/about"> About </Link></li>
                <li className="logo text-center"><h1>Layne McNish</h1></li>
                <li className="nav-link text-center"><Link to="/"> Portfolio </Link></li>
                <li className="nav-link text-center"><Link to="/about"> Contact </Link></li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
      </div>
    );
  }
}
