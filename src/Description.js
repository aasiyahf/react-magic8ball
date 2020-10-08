import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Description extends Component {
  render() {
    const { prompt, color } = this.props

    return (
      <View>
        <Text style={styles.heading}>MAGIC EIGHT BALL{"\n\n"}</Text>
          <Text style={styles.lead}>
            A magic eight ball is a mystical tool used by fortune tellers to predict the future and answer any question you could ever think to have.{"\n\n"}
          </Text>
          <Text style={[styles.lead, {color}]}>
            {prompt}
          </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
  },
  lead: {
    fontSize: 18
  },
  prompt: {
    fontSize: 20
  },
});

Description.defaultProps = {
  color: 'black'
}

export default Description;
