import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  ListView
} from 'react-native';

import { styles } from './styles';

const GetInvolvedListItem = ({list}) => {
  return (
    <TouchableHighlight
    onPress={console.log('hello')}
    underlayColor="#999999"
    style={styles.container}
    >
      <View style={styles.singleItem}>
        <View style={styles.description}>
          <Image
            source={{ uri: list.image }}
            style={{width: 35, height: 35, marginLeft: 8}} />
          <Text style={styles.textList}>{list.description}</Text>
        </View>
        <Image
          source={{uri: 'https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_403-512.png'}}
          style={{width: 25, height: 25, marginRight: 8}} />
      </View>
    </TouchableHighlight>
  )};
export default GetInvolvedListItem;
