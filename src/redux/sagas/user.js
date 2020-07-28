import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { storeUsers } from './../actions/user'
import {
  FETCH_USERS
} from './../actions/actionTypes'

function* fetchUsers() {
  let users = null
  yield axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      users = response.data
    })
  yield put(storeUsers(users))
}

export default function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS, fetchUsers)
}
