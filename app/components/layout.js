import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';
import Navbar from './navbar';

export default class Layout extends PureComponent {
  render () {
    console.log('found index component');
    const { children, location: { pathname } } = this.props;

    return (
      <div className="panel-container">
        <div className="fixed-panel">

          <Navbar />


          <div className="main-area">
            <div className="content">

              {children || this.renderAssistanceQuestion()}

            </div>
          </div>
        </div>
      </div>
    );
  }

  renderAssistanceQuestion () {
    return (
      <p><i className="fa fa-hand-o-left" /> How may we be of assistance?</p>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object,
};
