import { createAction } from 'redux-actions';
import { Map } from 'immutable';
import { JQUERY_AJAX } from '../util/middleware/ajax';

const emptyMap = Map();

export const setStartingLocation = createAction('SET_STARTING_LOCATION');

export const setEndingLocation = createAction('SET_ENDING_LOCATION');

export const getCrimeDataDone = createAction('GET_CRIME_DATA_DONE');

export const getCrimeData = createAction(
  'GET_CRIME_DATA',
  undefined,

  (params = emptyMap) => {
    const queryData = { startingLocation: params.get('startingLocation'), endingLocation: params.get('endingLocation') };

    return {
      [JQUERY_AJAX]: {
        url: 'http://lmcnish14.cartodb.com/api/v2/sql?q=SELECT geo_lon, geo_lat, severity FROM public.crime_updated',
        data: queryData,
        done: getCrimeDataDone,
      },
    };
  }
);
