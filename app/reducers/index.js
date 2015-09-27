import { List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { ActionTypes } from '../actions';

const {
  SET_STARTING_LOCATION,
  SET_ENDING_LOCATION,
  //GET_CRIME_DATA,
  //GET_CRIME_DATA_DONE,
  //INIT_MAP,
} = ActionTypes;

//const emptyList = List();
//const emptyMap = Map();
const defaultMapParams = Map({
  startingLocation: '',
  endingLocation: '',
});


//export const crimeDataRequested = handleActions({
  //[GET_CRIME_DATA]: () => true,
  //[GET_CRIME_DATA_DONE]: () => false,
//}, false);

//export const crimeData = handleActions({
  //[GET_CRIME_DATA_DONE]: (_, { payload }) => payload,
//}, emptyList);

//export const initMap = handleActions({
  //[INIT_MAP]: (_, { payload }) => payload,
//}, emptyList);

export const mapParams = handleActions({
  [SET_STARTING_LOCATION]: (state, action) =>
    state.set('startingLocation', action.payload),

  [SET_ENDING_LOCATION]: (state, action) =>
    state.set('endingLocation', action.payload),

}, defaultMapParams);
