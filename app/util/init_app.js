import React from 'react';
import $ from 'jquery';


export default function initApp (rootElement, mountPointId) {
  if (__DEV__) {
    require('./dev_ajax_debug').initializeAjaxDebuggingUtils();
  }

  $(document).ready(() => {
    React.render(rootElement, document.getElementById(mountPointId));
  });
}
