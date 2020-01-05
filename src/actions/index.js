// TODO: add and export your own actions

export function fetchCars(garage) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const promise = fetch(url).then(response => response.json());

  return {
    type: "FETCH_CARS",
    payload: promise
  };
}


export function postCars(garage, car, callback) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  }).then(r => r.json()).then(() => callback());

  return {
    type: "POSTCARS",
    payload: promise // Will be resolved by redux-promise
  };

}

export function fetchCar(id) {
 const url = `https://wagon-garage-api.herokuapp.com/cars/${id}`;
  const promise = fetch(url).then(response => response.json());

  return {
    type: "FETCH_CAR",
    payload: promise
  };
}
