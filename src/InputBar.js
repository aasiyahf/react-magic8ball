import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { connect } from 'react-redux';

import { appQuestionEntered } from './actions/appActions'

class InputBar extends Component {

  constructor(props) {
      super(props)
      this.state = {question: "Enter question for the ball here"}
  }

  render() {
    const { onClick, btnTxt, askBtnColor, askBtnPressed } = this.props

    return (
      <View style={styles.container}>
        <TextInput style={styles.questionBar}
          value={this.state.question}
          onChangeText={(text) => {
            this.setState({question: text})
          }}
        />
        <Button style={styles.askBtn} color={askBtnColor} title={btnTxt}
                onPress={() => {
                   console.log(this.state.question);
//                   onClick(this.state.question)
                   askBtnPressed(this.state.question)
                 }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  questionBar: {
    textAlign: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  askBtn: {
    textAlign: 'center',
    flexDirection: 'column',
    flex: 1,
    // color: '#000',
  }
});

InputBar.defaultProps = {
  btnTxt: "Ask!"
}

const mapStateToProps = (state) => {
  return {
    askBtnColor: (state.app.question === "") ? 'red' : 'green'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    askBtnPressed: (question) => {
      dispatch(appQuestionEntered(question))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputBar);
