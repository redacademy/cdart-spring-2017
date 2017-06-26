import React, { Component } from 'react';
import { View, Text, AppState } from 'react-native';
import PropTypes from 'prop-types';

import PushController from './../../pushController';
import PushNotification from 'react-native-push-notification'

class Updates extends Component {
  constructor(props) {
    super(props);
    this.handleAppListener = this.handleAppListener.bind(this);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppListener)
  }

  componentWillUnmount() {
    AppState.addEventListener('change', this.handleAppListener)
  }

  handleAppListener(AppState) {
    if(AppState === 'background') {
      PushNotification.localNotification({
        message: "Tweet Update", // (required)
      });
    }
  }

  render() {
    console.log('passed Data', this.props.tweets)
    return (
    <View style={{padding:16}}>
      <View>
        {(this.props.tweets) ? this.props.tweets.map((tweet, i) => { return (
          <View key={i} style={{marginBottom: 16}}>
            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
              <Text style={{fontWeight:'bold'}}>CDART</Text>
              <Text>{tweet.created_at.substring(4, 10)}</Text>
            </View>
            <View>
            <Text style={{width: 200}}>{tweet.text}</Text>
            </View>
          </View>
        )})
        :
        <Text style={{textAlign: 'center'}}>Loading Tweets... </Text>}
      </View>
      <PushController />
    </View>
    );
  }
}

Updates.propTypes = {
  tweets: PropTypes.array
};

export default Updates;
