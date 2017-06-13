import React from 'react';
import { View, Text, Image, Dimensions} from 'react-native';
import { styles } from './styles';

const HomeNavigationTab = ({title}) => {

  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: 75, height: 75}} />
      <Text>{title}</Text>
    </View>
  );
}

export default HomeNavigationTab;
