const base64 = require('base-64');

export const GET_TIMELINE = 'GET_TIMELINE';
const getTimeline = (payload) => ({ type: GET_TIMELINE, payload });

export const _fetchTwitter = () => (dispatch) => {
	const consumer_key = 'BOLVBb3RJ5ExaASkKJEN9uWsd';
	const consumer_secret = 'oBgVGnXfZnf1AFwpC9Z1SNbcOKfb1jIE3uIWnofCdkzTGt3BLL';
	const encode_secret = base64.encode(consumer_key + ':' + consumer_secret).toString('base64');
	const twitter_token = 'https://api.twitter.com/oauth2/token';
	const twitter_timeline = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=CDARTBC&exclude_replies=true&count=10';

	const createTokenHeader = new Headers({
			'Authorization': 'Basic ' + encode_secret,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
	});
	const createTokenOptions = {
		method: 'POST',
		headers: createTokenHeader,
		body: 'grant_type=client_credentials'
	}
	const requestOptions = (json) => {
		const bearerHeader = new Headers({
			"Content-Type": 'application/json',
			"Authorization": "Bearer " + json.access_token
		});
		return {
			method: 'GET',
			headers: bearerHeader
		};
	}

	fetch(twitter_token, createTokenOptions)
	.then(response => response.json())
	.then( json => {
		return fetch(twitter_timeline, requestOptions(json))
    .then(response => response.json())
    .then(json => {
      return dispatch(getTimeline(json))
    })
    .catch(err => console.log(err));
	})
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
