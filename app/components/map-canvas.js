import React from 'react';
import PureComponent from 'react-pure-render/component';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';


const { initMap } = ActionCreators;


export class MapCanvas extends PureComponent {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>Map Canvas</h1>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ initMap }, dispatch);
}

export default connect(undefined, mapDispatchToProps)(MapCanvas);
