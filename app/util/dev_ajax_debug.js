import $ from 'jquery';
import moment from 'moment';


export function initializeAjaxDebuggingUtils () {
  if (document && console && console.log)
    $(document)
      .ajaxSend(     logJQueryAjaxEvent('[AJAX Send]     ') )
      .ajaxComplete( logJQueryAjaxEvent('[AJAX Complete] ') );
}

function logJQueryAjaxEvent (eventName) {
  return (event, jqXHR, ajaxOptions) => {
    console.log(eventName,
                'url:', ajaxOptions.url,
                ' | ',
                'time:', moment().format('h:mm:ss.SS'),
                ' | ',
                'data:', { event, jqXHR, ajaxOptions });
  }
}
