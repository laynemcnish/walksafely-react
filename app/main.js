import 'babel/register';
import React from 'react';
import Root from './containers';
import $ from 'jquery';


if(__DEV__) {
  const devAjaxDebug = require('./util/dev_ajax_debug');
  devAjaxDebug.initializeAjaxDebuggingUtils();
}


function renderReactApp () {
  const mountPoint = document.getElementById('root');
  React.render(<Root />, mountPoint);
}


$(document).ready(renderReactApp);
