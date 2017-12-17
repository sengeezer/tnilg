import { combineReducers } from 'redux';

import FeedReducer from './feed';

const rootReducer = combineReducers({
  feed: FeedReducer,
});

export default rootReducer;
