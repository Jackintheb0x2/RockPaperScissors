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
  Button,
} from 'react-native';

//exports the function so it can be used in the navigation
export default function DiceRoller({navigation}){
    //returns the rendered screen
    return(
        //this view tag sets up the screen
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {/*this text displays which screen the user's on*/}
            <Text>Dice Roller (Coming Soon)</Text>
            {/*this button lets the user navigate to the previous screen*/}
            <Button
            //text for the button
            title="Go Home"
            //the event that happes when the button is clicked which returns the user to the home screen
            onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}
