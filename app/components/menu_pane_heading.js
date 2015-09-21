import React, { PropTypes } from 'react';
import PureComponent from 'react-pure-render/component';

export default class MenuPaneHeading extends PureComponent {
  render () {
    return (
      <li className={`heading ${this.props.active ? 'active' : ''}`}>

        <div className="icon">
          <i className={`fa fa-${this.props.icon}`} />
        </div>

        <a href="#" onClick={this.props.clickHandler}>
          {this.props.label}
        </a>

        <div className="hint">
          {this.props.active ? <i className="fa fa-chevron-right" /> : null}
        </div>

      </li>
    );
  }
}


MenuPaneHeading.propTypes = {
  icon: PropTypes.string,
  active: PropTypes.bool,
  label: PropTypes.string,
};
