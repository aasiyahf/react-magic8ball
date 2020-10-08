import { combineReducers } from 'redux'

// Reducers
import appReducer from './appReducer'

// Combine reducers
var reducers = combineReducers({
  app: appReducer
})

export default reducers
