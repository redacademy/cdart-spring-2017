 import React from 'react';
 import { Text, View } from 'react-native';

const Updates = ({ tweets }) => {
  console.log('passed Data', tweets)
  return (
    <View style={{padding:16}}>
      {(tweets) ? tweets.map((tweet, i) => { return (
        <View key={i} style={{marginBottom: 16}}>
          <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <Text style={{fontWeight:'bold'}}>CDART</Text>
            <Text>{tweet.created_at.substring(4, 10)}</Text>
          </View>
          <View>
          <Text style={{width: 200}}>{tweet.text}</Text>
          </View>
        </View>
        )}
      )
      :
      <Text style={{textAlign: 'center'}}>Loading Tweets... </Text>}
    </View>

  );
}

export default Updates;
