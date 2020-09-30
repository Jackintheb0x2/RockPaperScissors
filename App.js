//imports the status bar to see things at the top like battery life
import { StatusBar } from 'expo-status-bar';
//imports the react library along witht the component
import React, {Component} from 'react';
//imports the files necessary to navigate to other screens
import RockPaperScissors from './screens/RockPaperScissors';
import HomeScreen from './screens/HomeScreen';
import TicTacToe from './screens/TicTacToe';
import DiceRoller from './screens/DiceRoller';
//imports the module to let us navigate
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//creates a stack so we can add pages onto it
const Stack = createStackNavigator();

// this function app holds the stack for all the screens
function App() {
  //returns the screens from top to bottom
  return (
    //the navigation container holds all the screens for the navigation
    <NavigationContainer>
      {/*this holds the stack and gives the initial screen as the homescreen*/}
      <Stack.Navigator initialRouteName="Home">
        {/*this screen is the homescreen and calls the specific component*/}
        <Stack.Screen name="Home" component={HomeScreen}/>
        {/*this is the tic tac toe game and calls teh component for it*/}
        <Stack.Screen name="TicTacToe" component={TicTacToe}/>
        {/*this screen is the rock paper scissors game and calls the component for it*/}
        <Stack.Screen name="RockPaperScissors" component={RockPaperScissors}/>
        {/*this is the component for the dice roller and calls it when the navigation changes*/}
        <Stack.Screen name="DiceRoller" component={DiceRoller}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//this calls our app class to run our code.
export default App;