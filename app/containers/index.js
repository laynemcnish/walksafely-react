import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';

import  Layout from '../components/layout';
import AboutPage from '../components/about_page';
import store from '../store';

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Provider store={store}>

        {() =>
          <Router history={history}>
            <Route path="/" component={Layout}>
              <Route path="about" component={AboutPage}/>
            </Route>
          </Router>
        }

      </Provider>
    );
  };
}
