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


//this app extends the component to use it
export default class RockPaperScissors extends Component{

    //the constructor is the first thing to get called
    constructor(){
      //super lets us use 'this' when defining variables
      super();
      //these are the choices you can make in the game
      this.choices = ['Rock', 'Paper', 'Scissors'];
      //this sets the state to default values
      this.state={
        //player choice holds what the place chooses
        playerChoice: 'Player',
        //bot choice holds what the computer chooses
        botChoice: 'Bot 3000',
        //winner holds who won the game
        winner: '',
      }
    }
  
    //this function checks to see who won and passes in the user's choice
    check(userChoice){
      //decides the enemy's choice from the array
      let enemyChoice = this.choices[Math.floor(Math.random() * 3)];
      //changes the state of the playyer and bot to their current choices
      this.setState({playerChoice: userChoice})
      this.setState({botChoice: enemyChoice})
  
      //checks to see if they are tied
      if(userChoice == enemyChoice){
        //sets the winner state to tie
        this.setState({winner: 'Tie!'})
      }
      //if the user chose rock
      else if(userChoice == 'Rock'){
        //it checks the enemy's choice
        if(enemyChoice == 'Paper'){
          //if its paper then the player loses
          this.setState({winner: 'You Lose!'})
        }else{
          //we already check to see if its a tie so the only other option is that the player won
          this.setState({winner: 'You Win!'})
        }
      }
      //if the user chose paper
      else if(userChoice == 'Paper'){
        //it checks the enemy's choice
        if(enemyChoice == 'Scissors'){
          //if its paper then the player loses
          this.setState({winner: 'You Lose!'})
        }else{
          //we already check to see if its a tie so the only other option is that the player won
          this.setState({winner: 'You Win!'})
        }
      }
      //if the user chose scissors
      else if(userChoice == 'Scissors'){
        //it checks the enemy's choice
        if(enemyChoice == 'Rock'){
          //if its paper then the player loses
          this.setState({winner: 'You Lose!'})
        }else{
          //we already check to see if its a tie so the only other option is that the player won
          this.setState({winner: 'You Win!'})
        }
      }
    }
  
    //the render function displays the data and components onto the screen
    render(){
      //this returns the data so it can be rendered
      return(
        //this view is for the whole screen
        <View style={styles.container}>
          {/* shows the status bar at the top */}
          <StatusBar style="auto" />
  
          {/* this view displays the outcome */}
          <View style={{borderWidth: 2, borderRadius: 25, padding: 20, backgroundColor: '#fff'}}>
            {/* displays the choices of both players */}
            <Text style={styles.display}>{this.state.playerChoice + " VS " + this.state.botChoice}</Text>
            {/* displays the winner */}
            <Text style={styles.display}>{this.state.winner}</Text>
          </View>
  
          {/* this view shows all the options to the user */}
          <View style={styles.options}>
            {/* this is the button for the rock */}
            <TouchableOpacity style={styles.button} onPress={ () => {
                //calls teh function and passes the user's choice
                this.check('Rock')
              }}> 
              
              {/* displays the image of the rock */}
              <Image source={require('../assets/rock.png')}/>
  
            </TouchableOpacity>
  
            {/* this is the button for the paper */}
            <TouchableOpacity style={styles.button} onPress={ () => {
                //calls teh function and passes the user's choice
                this.check('Paper')
              }}>
  
              {/* displays the image of the paper */}
              <Image source={require('../assets/paper.png')}/>
  
            </TouchableOpacity>
  
            {/* this is the button for the scissors */}
            <TouchableOpacity style={styles.button} onPress={ () => {
                //calls teh function and passes the user's choice
                this.check('Scissors')
              }}>
  
              {/* displays the iamge of the scissors */}
              <Image source={require('../assets/scissors.png')}/>
  
            </TouchableOpacity>
          </View>
          
          
        </View>
      );
    }
  }

//the stylesheets hold the CSS or styling for the views and other components
const styles = StyleSheet.create({
    //the container is the main view which encomapsses the whole screen
    container: {
        //the flex shows what is part of the screen
        flex: 1,
        //the background color is changed to white
        backgroundColor: '#eee',
        //this aligns all the views in the center
        alignItems: 'center',
        //moves all the contents next to each other in the center
        justifyContent: 'center',
        
    },
    //this stylesheet is for displaying the options for each button
    options:{
        //moves the buttons down a bit to create distance from the output
        marginTop: 60,
        //allows all the buttons inside the view to be arranged from left to right
        flexDirection: 'row',
        //makes sure the buttons don't overflow to the next line
        flexWrap: 'nowrap',
        
    },
    //this style sheet is for the individual buttons
    button: {
        //adds bacground color to the borders
        backgroundColor: '#fff',
        //this creates distance between each button
        marginHorizontal: 10,
        //the width of the button
        width: 110,
        //the height of the button
        height: 120,
        //how thick the border is
        borderWidth: 2,
        //how rounded the border edges are
        borderRadius: 10,

        //centers the image vertically in the border
        justifyContent: 'space-around',
        //centers the image horizontally in the border
        alignItems: 'center',
    },
    //this style sheet controls the styling for the output text
    display: {
        //aligns the text in the center
        textAlign: 'center',
        //makes the font bigger so it's easier to see
        fontSize: 30,
    },
});
