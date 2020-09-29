//imports the status bar to see things at the top like battery life
import { StatusBar } from 'expo-status-bar';
//imports the react library along witht the component
import React, {Component} from 'react';
//imports the components necessary like image and view and touchableopacity
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TouchableOpacity,  
} from 'react-native';
import RockPaperScissors from './screens/RockPaperScissors';
import HomeScreen from './screens/HomeScreen';
import TicTacToe from './screens/TicTacToe';
import DiceRoller from './screens/DiceRoller';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="TicTacToe" component={TicTacToe}/>
        <Stack.Screen name="RockPaperScissors" component={RockPaperScissors}/>
        <Stack.Screen name="DiceRoller" component={DiceRoller}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//this calls our app class to run our code.
export default App;