import React, { Component } from 'react';
import { Provider } from 'react-redux';


export default function initRootComponent (App, store) {

 return class Root extends Component {
    constructor(props) {
      super(props);
      this.renderApp = this.renderApp.bind(this);
      if (__DEV__)
        this.state = { debugVisible: false };
    }

    render() {
      if (__DEV__) {
        const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');
        const toggleButtonStyle = {
          backgroundColor: '#2A2F3A',
          color: '#6FB3D2',
          position: 'fixed',
          bottom: 0,
          left: 0
        };

        return (
          <div>

            {this.renderApp()}

            <DebugPanel right bottom top={this.state.debugVisible}>
              <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>

            <button
             onClick={() => { this.setState({ debugVisible: !this.state.debugVisible }); } }
             style={toggleButtonStyle}>

              HIDE/SHOW REDUX DEBUG PANEL

            </button>

          </div>
        );
      }
      else
        return this.renderApp();
    }

    renderApp () {
      return (
        <Provider store={store}>

          {() => <App /> }

        </Provider>
      );
    }
  }
}
