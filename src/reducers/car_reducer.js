export default function(state, action) {
  if (state === undefined) {
    return null;
  }
  switch (action.type) {
    case 'FETCH_CAR': {
      return action.payload;
    }
    default:
      return state;
  }
}
