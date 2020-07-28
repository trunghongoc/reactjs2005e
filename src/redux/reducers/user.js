import {
  STORE_USERS
} from './../actions/actionTypes'

const initialState = []

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case STORE_USERS:
      return action.users
    default:
      return state
  }
}

export default userReducer
