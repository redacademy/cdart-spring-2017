import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { connect } from 'react-redux'

import { _fetchTwitter } from '../../redux/modules/updates';

import { clearNavStack } from '../../lib/navigationHelpers';

import Updates from './Updates';

class UpdatesContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Updates',
    }
  }
  componentDidMount(){
    this.props.fetchTwitter();
  }
  componentWillUpdate() {
    clearNavStack('home');
  }

  render() {
    return (
      <Updates tweets={this.props.updates.twitterData} />
    );
  }
}

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

UpdatesContainer.propTypes = {
  updates: PropTypes.array,
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdatesContainer);
