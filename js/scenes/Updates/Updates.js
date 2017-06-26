import React, { Component } from 'react';
import { View, Text, AppState, Image, Dimensions, ScrollView, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import { _fetchTwitter } from '../../redux/modules/updates';
import PushController from './../../pushController';
import { connect } from 'react-redux'

import PushNotification from 'react-native-push-notification'

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
    console.log('passed Data', this.props.tweets)
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
            <View
              key={i}
              style={{
                flexDirection:'row',
                marginBottom: 8,
                paddingBottom: 8,
                borderBottomWidth: .5,
                borderColor:'grey',
                justifyContent:'space-between'
            }}>
              <View
                style={{
                  width: width - 32,
                  flexWrap: 'wrap'
                }}
              >
                <View style={{flexDirection:'row', justifyContent: 'space-between', marginBottom: 4}}>
                  <Text style={{fontWeight:'bold'}}>{tweet.user.name}
                    <Text style={{color:'grey'}}> @{tweet.user.screen_name}</Text>
                  </Text>
                  <Text style={{color:'red'}}>{tweet.created_at.substring(4, 10)}</Text>
                </View>
                <View style={{width: width - 32}}>
                  {tweet.entities.media ?
                    <Image source={{uri: tweet.entities.media[0].media_url_https}} style={{width: '100%', height:250, marginBottom: 8, marginTop:4}} />
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
function mapStateToProps(state){
  return {
    updates: state.updates
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Updates);
