import React, { Component } from 'react';
import BackgroundFetch from "react-native-background-fetch";

import { _fetchTwitter } from './../../redux/modules/updates';
import { connect } from 'react-redux'

import PropTypes from 'prop-types';

class BackgroundFetchController extends Component {
  componentDidMount() {
    BackgroundFetch.configure({
      stopOnTerminate: false
    }, function() {
      this.props.fetchTwitter();
      console.log("[js] Received background-fetch event"),
      BackgroundFetch.finish();
    }, function(error) {
      console.log("[js] RNBackgroundFetch failed to start");
    });
    BackgroundFetch.status(function(status) {
      switch(status) {
        case BackgroundFetch.STATUS_RESTRICTED:
          console.log("BackgroundFetch restricted");
          break;
        case BackgroundFetch.STATUS_DENIED:
          console.log("BackgroundFetch denied");
          break;
        case BackgroundFetch.STATUS_AVAILABLE:
          console.log("BackgroundFetch is enabled");
          break;
      }
    });
  }

  render() {
    return null ;
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchTwitter(){
      dispatch(_fetchTwitter())
    }
  }
}

BackgroundFetchController.propTypes = {
  fetchTwitter: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(BackgroundFetchController);
