import {
  INCREMENT,
  DESCREMENT
} from './../actions/actionTypes'

const initialState = {
  count: 1
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.number
      }
    case DESCREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

export default counterReducer
