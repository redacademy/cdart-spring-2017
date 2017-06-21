import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const PhoneNumberField = (props) => {
  return (
    <View>
      <Text style={styles.heading}>Phone Number</Text>
      <View style={{flexDirection: 'row'}}>
        <View>
          <TextInput
            style={styles.textInput}
            editable={true}
            onChangeText={props.onChange}
            value={props.value}
          />
          <Text style={styles.subheading}>Area Code</Text>
        </View>

        <TextInput
          style={styles.textInput}
          editable={true}
          onChangeText={props.onChange}
          value={props.value}
        />
        <Icon
          name={'ios-remove'}
          size={20}
          style={{height: 30, alignSelf: 'center', marginRight: 10}}
        />
        <TextInput
          style={styles.textInput}
          editable={true}
          onChangeText={props.onChange}
          value={props.value}
        />
      </View>
    </View>
  );
}

export default PhoneNumberField;