import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Title from '../components/Title';

const Result = ({navigation, route}) => {
  const {score} = route.params;
  const resultBanner =
    score > 150
      ? 'https://cdn3d.iconscout.com/3d/premium/thumb/businessman-showing-victory-sign-2873050-2384296@0.png'
      : 'https://cdn3d.iconscout.com/3d/premium/thumb/businessman-holding-hands-on-give-up-4916307-4104280.png';

  console.log(score, 'params'); // will give total score
  return (
    <View style={{height: '100%', paddingTop: 40, paddingHorizontal: 20}}>
      <Title titleText="RESULTS" />
      <Text style={{fontSize: 24, fontWeight: '800', alignSelf: 'center'}}>
        {score}
      </Text>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{
            uri: resultBanner,
          }}
          style={{height: 300, width: 300}}
          resizeMode="contain"
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: '#AB420A',
            padding: 16,
            borderRadius: 16,
            alignItems: 'center',
            marginBottom: 30,
          }}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{fontSize: 22, fontWeight: '600', color: '#F5F5F9'}}>
            GO TO HOME
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;
