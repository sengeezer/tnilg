import { FETCH_FEED } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_FEED:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
