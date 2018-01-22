import axios from 'axios';
import keys from '../config/keys';

const API_KEY = keys.feedlyAccess;
const DOMAIN = 'http://cloud.feedly.com';
const ROOT_URL = `${DOMAIN}/v3/streams/contents?streamId=feed`;

export const FETCH_FEED = 'FETCH_FEED';

export function fetchFeed(feedURl) {
  // const url = `${ROOT_URL}/${feedURl}&n=20&access_token=${API_KEY}`;
  const url = `${ROOT_URL}/${feedURl}&n=20`;
  console.log('url', url);
  const req = axios.get(url, {
    // withCredentials: true,
    Authorization: `OAuth ${API_KEY}`,
  });

  return {
    type: FETCH_FEED,
    payload: req,
  };
}
