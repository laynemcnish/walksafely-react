export default function initActionTypes (ActionCreators) {
  return Object.values(ActionCreators).reduce( (obj, fn) => {
    const actionType = fn().type;
    return { ...obj, [actionType]: actionType };
  }, {});
}
