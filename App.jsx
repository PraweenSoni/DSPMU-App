import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from './src/screens/Start';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Start' component={Start}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Register' component={Register}/>
      <Stack.Screen name='Home' component={Home}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
