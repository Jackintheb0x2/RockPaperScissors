//imports the status bar to see things at the top like battery life
import { StatusBar } from 'expo-status-bar';
//imports the react library along witht the component
import React, {Component} from 'react';
//imports the components necessary like image and view and touchableopacity
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
} from 'react-native';

//exports the function so it can be used in the navigation
export default function HomeScreen({navigation}){
  //returns the rendered home screen
  return(
    //this view tag sets up the screen for all the buttons for navigation
    <View style={styles.container}>
      {/*this text displays which screen the user's on*/}
      <Text style={{fontSize: 40,}}>Home Screen</Text>
      {/*this button lets the user navigate to the tictactoe screen*/}
      <TouchableOpacity
        //gets the style for the button formt eh stylesheet
        style={styles.button}
        //the event that happes when the button is clicked which sends the user to the tictactoe screen
        onPress={() => navigation.navigate('TicTacToe')}
      >
        {/*this gives text to the button to show the user which screen to go to*/}
        <Text style={styles.text}>TicTacToe (Coming Soon)</Text>
      </TouchableOpacity>
      {/*this button lets the user navigate to the rock paper scissors screen*/}
      <TouchableOpacity
        //gets the style for the button formt eh stylesheet
        style={styles.button}
        //the event that happes when the button is clicked which sends the user to the rock paper scissors screen
        onPress={() => navigation.navigate('RockPaperScissors')}
      >
        {/*this gives text to the button to show the user which screen to go to*/}
        <Text style={styles.text}>Rock Paper Scissors</Text>
      </TouchableOpacity>
      {/*this button lets the user navigate to the dice roller screen*/}
      <TouchableOpacity
        //gets the style for the button formt eh stylesheet
        style={styles.button}
        //the event that happes when the button is clicked which sends the user to the dice roller screen
        onPress={() => navigation.navigate('DiceRoller')}
      >
        {/*this gives text to the button to show the user which screen to go to*/}
        <Text style={styles.text}>Dice Roller (Coming Soon)</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#00BFFF',
    width: 200,
    height: 40,
    justifyContent: 'center',
  },
  text:{
    color: '#def',
    textAlign: 'center',
    fontSize: 16,
  }
})