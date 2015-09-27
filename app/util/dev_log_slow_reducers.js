export default function logSlowReducers (reducers, thresholdMs = 8) {
  return Object.entries(reducers).reduce( (obj, [name, reducer]) => ({

    ...obj,

    [name]: (state, action) => {
      const t0 = Date.now();
      const newState = reducer(state, action);
      const diffMs = Date.now() - t0;

      if (diffMs > thresholdMs)
        console.warn(`Reducer ${name} took ${diffMs}ms for ${action.type}.`);

      return newState;
    },

  }), {});
}
