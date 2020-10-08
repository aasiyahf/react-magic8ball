import {
  APP_QUESTION_ENTERED,
  APP_ANSWER_GENERATED
} from '../actions/appActions.js'

const initialState = {
  question: "",
  answer: ""
}

const appReducer = function(state=initialState, action) {
  switch (action.type) {
    case APP_QUESTION_ENTERED:
      return {...state, question: action.question}

    case APP_ANSWER_GENERATED:
      return {...state, answer: action.answer}

    default:
      return {...state}
  }
}

export default appReducer
