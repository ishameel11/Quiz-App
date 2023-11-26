import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Title from '../components/Title';
import {url} from 'inspector';

const Home = ({navigation}) => {
  return (
    <View style={{height: '100%', paddingTop: 40, paddingHorizontal: 20}}>
      <Title titleText="QUIZZY" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://cdni.iconscout.com/illustration/premium/thumb/customer-survey-3428393-2910850.png',
          }}
          style={{height: 300, width: 300}}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        style={{
          width: '100%',
          backgroundColor: '#AB420A',
          padding: 16,
          borderRadius: 16,
          alignItems: 'center',
          marginBottom: 30,
        }}
        onPress={() => navigation.navigate('Quiz')}>
        <Text style={{fontSize: 22, fontWeight: '600', color: '#F5F5F9'}}>
          Start
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
