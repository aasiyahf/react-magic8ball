import React, { Component } from 'react';
import { Dimensions, TouchableHighlight, StyleSheet, Text, View, Image } from 'react-native';
import triangle from './triangle.png';

class Ball extends Component {
  render() {
    const { answer, question } = this.props

    if ( question === "" ) {
      return (
        <View style={styles.ball}>
          <View style={styles.eight}></View>
        </View>
      )
    } else {
      return (
        <TouchableHighlight style={styles.ball}>
          <View style={styles.blueCircle}></View>
            <View style={styles.triAns}>
              <Image style={styles.triangle} src={triangle} alt="Your life is irrelevant." />
            <View style={styles.answer}>{answer}</View>
          </View>
        </TouchableHighlight>
      )
    }
  }
}

const styles = StyleSheet.create({
  ball: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    backgroundColor:'#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  triAns: {
    position: 'absolute',
    textAlign: 'center',
    color: '#FFF'
  },
  /* Triangle for answers by magic eight ball */
  triangle: {
  },
  /* Creates space for eight symbol on ball */
  eight: {
  },
  /* Creates space for eight symbol on ball */
  blueCircle: {
  },
  answer: {
  },
});

export default Ball;
