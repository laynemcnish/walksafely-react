import * as ActionCreators from './actions';
import initActionTypes from '../util/init_action_types';

const ActionTypes = initActionTypes(ActionCreators);

export default { ActionTypes, ActionCreators };
