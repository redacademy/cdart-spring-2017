import React, { Component } from 'react';
import { View, Text, AppState, Image, ScrollView, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import { _fetchTwitter } from '../../redux/modules/updates';

import PushController from './../../components/PushController';
import BackgroundFetchController from './../../components/BackgroundFetchController';

import { connect } from 'react-redux'

import PushNotification from 'react-native-push-notification'
import { typography } from '../../config/styles';

import { styles } from './styles';

class Updates extends Component {
  constructor(props) {
    super(props);

    this.autoRefresh = this.autoRefresh.bind(this);
    this.handleAppListener = this.handleAppListener.bind(this);

    this.state={
      refreshing:false,
      tweetId: '',
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppListener);
    AppState.addEventListener('change', this.autoRefresh);
  }

  componentWillUnmount() {
    AppState.addEventListener('change', this.handleAppListener);
  }

  handleAppListener(AppState) {
    if(AppState === 'background') {
      this.tweetIdCheck();
    }
  }

  tweetIdCheck(){
    const currentTweetId = this.props.tweets[0].id
    const storedTweedId = this.state.tweetId

    if(currentTweetId != storedTweedId) {
      return PushNotification.localNotification({ message: `Tweet Update: ${this.props.tweets[0].text}` }),
              this.setState({ tweetId: currentTweetId })
    }
  }

  autoRefresh(AppState) {
    if(AppState === 'active'){
      this._onRefresh()
    }
  }

  _onRefresh() {
    this.setState({refreshing: true});
    this.props.fetchTwitter();
    this.tweetIdCheck();
    this.setState({refreshing: false});
  }

  render() {
    return (
    <ScrollView
      style={{padding:16}}
      refreshControl={
        <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh.bind(this)} />
      }
    >
      <View>
        {(this.props.tweets) ? this.props.tweets.map((tweet, i) => {
          return (
            <View key={i} style={styles.tweet}>
              <View style={styles.screenWidth}>
                <View style={styles.nameDate}>
                  <Text style={{fontWeight:'bold'}}>{tweet.user.name}
                    <Text style={{color:'grey', fontFamily: typography.fontMainLight}}> @{tweet.user.screen_name}</Text>
                  </Text>
                  <Text style={{color:'#BF3841'}}>{tweet.created_at.substring(4, 10)}</Text>
                </View>
                <View style={styles.screenWidth}>
                  {
                    tweet.entities.media ?
                    <Image source={{uri: tweet.entities.media[0].media_url_https}} style={styles.tweetImage} />
                    :
                    <View></View>
                  }
                  <Text>{tweet.text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '')}</Text>
                </View>
              </View>
            </View>
          )
        })
        :
        <Text style={{textAlign: 'center'}}>Loading Tweets... </Text>}
      </View>
      <BackgroundFetchController />
      <PushController />
    </ScrollView>
    );
  }
}

Updates.propTypes = {
  tweets: PropTypes.array,
  fetchTwitter: PropTypes.func,
};

function mapDispatchToProps(dispatch){
  return {
    fetchTwitter(){
      dispatch(_fetchTwitter())
    }
  }
}

export default connect(null, mapDispatchToProps)(Updates);
