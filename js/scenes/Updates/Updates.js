import React, { Component } from 'react';
import { View, Text, AppState, Image, Dimensions, ScrollView, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import { _fetchTwitter } from '../../redux/modules/updates';
import PushController from './../../pushController';
import { connect } from 'react-redux'

import PushNotification from 'react-native-push-notification'
import { styles } from './styles';
var {height, width} = Dimensions.get('window');
class Updates extends Component {
  constructor(props) {
    super(props);
    this.handleAppListener = this.handleAppListener.bind(this);
    this.state={
      refreshing:false,
    };
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
   _onRefresh() {
    this.setState({refreshing: true});
    this.props.fetchTwitter();
    this.setState({refreshing: false});
  }

  render() {
    return (
    <ScrollView
      style={{padding:16}}
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh.bind(this)}
        />
      }
    >
      <View>
        {(this.props.tweets) ? this.props.tweets.map((tweet, i) => {
          return (
            <View key={i} style={styles.tweet}>
              <View style={{ width: width - 32 }}>
                <View style={styles.nameDate}>
                  <Text style={{fontWeight:'bold'}}>{tweet.user.name}
                    <Text style={{color:'grey'}}> @{tweet.user.screen_name}</Text>
                  </Text>
                  <Text style={{color:'#FB725D'}}>{tweet.created_at.substring(4, 10)}</Text>
                </View>
                <View style={{width: width - 32}}>
                  {tweet.entities.media ?
                    <Image source={{uri: tweet.entities.media[0].media_url_https}} style={styles.tweetImage} />
                    :
                    <View></View>
                  }
                  <Text>{tweet.text}</Text>
                </View>
              </View>
            </View>
          )
        })
        :
        <Text style={{textAlign: 'center'}}>Loading Tweets... </Text>}
      </View>
      <PushController />
    </ScrollView>
    );
  }
}

Updates.propTypes = {
  tweets: PropTypes.array
};
function mapDispatchToProps(dispatch){
  return {
    fetchTwitter(){
      dispatch(_fetchTwitter())
    }
  }
}

export default connect(null, mapDispatchToProps)(Updates);
