import { ADD_FEED, SELECT_FEED, REMOVE_FEED } from '../actions/feeds';

export default function (state = [], action) {
  switch (action.type) {
    case ADD_FEED:
      return [
        ...state,
        {
          id: action.id,
          url: action.url,
          selected: false,
        },
      ];
    case SELECT_FEED:
      return state.map((feed) => {
        return (feed.id === action.id)
          ? { ...feed, selected: !feed.selected }
          : feed;
      });
    case REMOVE_FEED:
      return state.filter(feed => feed.id !== action.id);
    default:
      return state;
  }
}
