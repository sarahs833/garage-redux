export default function (state, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case 'FETCH_CARS': {
      return action.payload;
    }
    case 'REMOVE_CAR': {
      return state.filter((car) => car !== action.payload);
    }
    default:
      return state;
  }
}
