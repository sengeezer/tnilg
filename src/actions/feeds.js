export const ADD_FEED = 'ADD_FEED';
export const SELECT_FEED = 'SELECT_FEED';
export const REMOVE_FEED = 'REMOVE_FEED';

let nextFeedId = 0;

export const addFeed = (url) => {
  return {
    type: ADD_FEED,
    id: nextFeedId++,
    url,
  };
};

export const selectFeed = (id) => {
  return {
    type: SELECT_FEED,
    id,
  };
};

export const removeFeed = (id) => {
  return {
    type: REMOVE_FEED,
    id,
  };
};
