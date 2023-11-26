import {View, Text} from 'react-native';
import React from 'react';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Result from './screens/Result';
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './navigation/Index';

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
