export const GET_TIMELINE = 'GET_TIMELINE';

const getTimeline = (payload) => ({ type: GET_TIMELINE, payload });

export const _fetchTwitter = () => (dispatch) => {
  var twitter_api = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=CDARTBC&exclude_replies=true&count=10';
  const bearer_token = 'AAAAAAAAAAAAAAAAAAAAAOnO1AAAAAAAwRQzejmj34jnzZZ9RxEM9CdgdOg%3DdhOxuei5pbuQItzxQRC6FHBT7rBKO0WpARg5hWfEKUVbEF4eiq';
  const requestHeaders = new Headers({
    "Content-Type": 'application/json',
    "Authorization": "Bearer " + bearer_token
  });
  const options = {
    method: 'GET',
    headers: requestHeaders
  };
  return fetch(twitter_api, options)
    .then(response => response.json())
    .then(json => {
      return dispatch(getTimeline(json))
    })
    .catch(err => console.log(err));
}

export default function reducer(state = [], action) {
    switch (action.type) {
    case GET_TIMELINE:{
        return Object.assign([], state, {
            twitterData: action.payload
        })
    }
    default:
        return state;
    }
}
