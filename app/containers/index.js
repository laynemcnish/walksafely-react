import React from 'react';
import PureComponent from 'react-pure-render/component';
import store from '../store';
import initRootComponent from '../util/init_root_component';
import Header from './header';
import MapCanvas from './map-canvas';
require("../styles/application.css");

class Root extends PureComponent {

  render () {
    return (
      <div className="content">
        <div className="container">
          <Header />
        </div>
        <div className="map-container">
          <MapCanvas />
        </div>
      </div>
    );
  }
}


export default initRootComponent(Root, store);
