import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Provider } from 'react-redux'
import store from './store'

import Description from './Description.js';
import Ball from './Ball.js'
import InputBar from './InputBar.js'

function generateAns() {
  var replies = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you", "Cannot predict", "Focus and try again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
  // Generate a random number from 0-19
  var randomNum = Math.floor(Math.random() * 20);
  // retrieve answer at index of random number
  return replies[randomNum]
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: ""
    }
    this.btnClick = this.btnClick.bind(this)
  }

  btnClick(question) {
    console.log("button clicked with " + question)
    this.setState({question: question})
  }

  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <View style={styles.main}>
          <View style={styles.description}>
            <Description
              prompt={
                (this.state.question === "")
                 ? "Ask any question you wish!"
                 : "Your question has been answered!"
              }
              color={
                (this.state.question === "")
                 ? 'purple'
                 : 'green'
              }
            />
          </View>
          <View style={styles.ball}>
            <Ball answer={generateAns()} question={this.state.question}/>
          </View>
        </View>
        <View style={styles.inputBar}>
          <InputBar onClick={(question) => {
                       this.btnClick(question)
                     }}
          />
        </View>
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: Platform.OS === 'web'
            ? 0
            : Platform.OS === 'android'
              ? 24
              : 0,
  },
  main: {
    flex: 8,
    flexDirection: 'row'
  },
  description: {
    flex: 1,
    backgroundColor: 'white'
  },
  ball: {
    flex: 1,
    backgroundColor: 'white'
  },
  inputBar: {
    flex: 1,
  },
});
