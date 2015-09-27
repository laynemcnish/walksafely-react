import $ from 'jquery';
import { isPlainObject } from '../../util/our_lodash';


export const JQUERY_AJAX = Symbol('jquery-ajax-middleware');


export default function ajaxMiddleware (opts = {}) {

  validateOptions(opts);

  const beforeAjaxCall = opts.beforeAjaxCall || ( x => x );
  const onAjaxCallDone = opts.onAjaxCallDone || ( (...args) => args );
  const onAjaxCallFail = opts.onAjaxCallFail || ( (...args) => args );

  return ({ dispatch }) => next => action => {

    if (!isPlainObject(action) ||
        !isPlainObject(action.meta) ||
        !(JQUERY_AJAX in action.meta))
      return next(action);

    const ajaxCall = beforeAjaxCall(action.meta[JQUERY_AJAX], action);

    if (!isPlainObject(ajaxCall))
      throw new Error('`action.meta[JQUERY_AJAX]` must be a plain JavaScript object.');

    const { done, fail, dispatchBaseAction } = ajaxCall;

    if (dispatchBaseAction !== false)
      next(action);

    const $ajax = $.ajax({ ...ajaxCall, done: undefined, fail: undefined });

    if (typeof done === 'function')
      $ajax.done(
        (...args) => dispatch( done( ...onAjaxCallDone(...args, ajaxCall, action) ) )
      );

    if (typeof fail === 'function')
      $ajax.fail(
        (...args) => dispatch( fail( ...onAjaxCallFail(...args, ajaxCall, action) ) )
      );

    return $ajax;
  };
}


const optionsKeys = [ 'beforeAjaxCall', 'onAjaxCallDone', 'onAjaxCallFail' ];


function validateOptions (opts) {
  if (typeof opts === 'undefined')
    return;

  if (typeof opts !== 'object')
    throw new Error('The optional argument to `ajaxMiddleware` should ' +
                    'be an object or left undefined.')

  optionsKeys.forEach( fnName => {
    const fn = opts[fnName];

    if (typeof fn !== 'function' && typeof fn !== 'undefined')
      throw new Error(`\`${fnName}\` must be a function or left undefined.`);
  });
}
