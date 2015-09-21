import React from 'react';
import Root from './containers/index';
import $ from 'jquery';

function renderReactApp () {
  const mountPoint = document.getElementById('root');
  React.render(<Root />, mountPoint);
}

$(document).ready(renderReactApp);
