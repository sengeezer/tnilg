import { ADD_FEED, SELECT_FEED, REMOVE_FEED } from '../actions/feeds';

export default function (state = [], action) {
  switch (action.type) {
    case ADD_FEED:
      // TODO: continue here
      return [action.payload.data, ...state];
    case SELECT_FEED:
      return state;
    case REMOVE_FEED:
      return state;
    default:
      return state;
  }
}
