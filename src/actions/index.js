import axios from 'axios';

export const FETCH_FEED = 'FETCH_FEED';

export function fetchFeed(feedURl) {
  const req = axios.get(feedURl);

  return {
    type: FETCH_FEED,
    payload: req,
  };
}
