import { combineReducers } from 'redux';

import FeedReducer from './feed';
import FeedListReducer from './feeds';

const rootReducer = combineReducers({
  feed: FeedReducer,
  feeds: FeedListReducer,
});

export default rootReducer;
