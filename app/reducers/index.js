import { GET_CURRENT_API_KEY_SUCCESS } from '../actions';


export function currentApiKey(state = '', action) {
  const { type, payload } = action;

  if (type === GET_CURRENT_API_KEY_SUCCESS)
    return payload;
  else
    return state;
}
