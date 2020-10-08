export const APP_QUESTION_ENTERED = "APP_QUESTION_ENTERED"
export const APP_ANSWER_GENERATED = "APP_ANSWER_GENERATED"

export function appQuestionEntered(question) {
  return {
    type: APP_QUESTION_ENTERED,
    question
  }
}

export function appAnswerGenerated(answer) {
  return {
    type: APP_ANSWER_GENERATED,
    answer
  }
}
