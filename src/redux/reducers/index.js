import { combineReducers } from 'redux'

import counterReducer from './count'
import userReducer from './user'

export default combineReducers({
  counterReducer,
  userReducer
})
