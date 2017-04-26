import { FETCH_WEATHER } from "../actions/index";
export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // ES6 way to concat and keep flat array
    return [ action.payload.data, ...state];
  }
  return state;
}