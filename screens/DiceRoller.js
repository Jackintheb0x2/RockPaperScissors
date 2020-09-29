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

export default function DiceRoller({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Dice Roller (Coming Soon)</Text>
            <Button
            title="Go Home"
            onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}
