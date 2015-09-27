import { fromJS } from 'immutable';
import { camelizeKeys, decamelizeKeys } from 'humps';
import { Schema, arrayOf, normalize } from 'normalizr';
import ajaxMiddleware from './ajax';
import { isPlainObject } from '../our_lodash';


export const SCHEMA = Symbol('api-middleware-schema');


export function beforeAjaxCall (call) {
  return typeof call.data === 'undefined'
    ? call
    : { ...call, data: externalizeData(call.data) };
}


export function onAjaxCallDone (data, textStatus, jqXHR, ajaxCall) {
  const schema = ajaxCall[SCHEMA];
  validateSchema(schema);
  const doneArgs = [ internalizeData(data, schema) ];
  return doneArgs;
}


export function onAjaxCallFail ({ status, responseJSON }) {
  const failArgs = [ status, camelizeKeys(responseJSON) ];
  return failArgs;
}


export default ajaxMiddleware({ beforeAjaxCall, onAjaxCallDone, onAjaxCallFail });


function externalizeData (data) {
  return decamelizeKeys( typeof data.toJS === 'function' ? data.toJS() : data );
}


function internalizeData (data, schema) {
  const camelized = camelizeKeys(data);
  return fromJS( schema ? normalize(camelized, schema) : camelized );
}


function validateSchema (schema) {
  if (!(typeof schema === 'undefined' || _schemas.includes(schema)))
    throw new Error('Schema must be a valid exported schema or left undefined.');
}


const ticketSchema = new Schema('tickets');
const noteSchema   = new Schema('notes');  // 'notes' is name of key in a ticket


ticketSchema.define({
  notes: arrayOf(noteSchema),
});


export const Schemas = {
  TICKET_ARRAY: arrayOf(ticketSchema),
};


const _schemas = Object.values(Schemas);
