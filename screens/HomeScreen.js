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


export default function HomeScreen({navigation}){
  return(
    <View style={styles.container}>
      <Text style={{fontSize: 40,}}>Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('TicTacToe')}
      >
        <Text style={styles.text}>TicTacToe (Coming Soon)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RockPaperScissors')}
      >
        <Text style={styles.text}>Rock Paper Scissors</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DiceRoller')}
      >
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