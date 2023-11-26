import {View, Text} from 'react-native';
import React from 'react';

const Title = ({titleText}) => {
  return (
    <View
      style={{
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 28, fontWeight: '600'}}>{titleText}</Text>
    </View>
  );
};

export default Title;
