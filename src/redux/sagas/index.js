import { all } from 'redux-saga/effects'

import watchFetchUsers from './user'

export default function* rootSaga() {
  yield all([
    watchFetchUsers()
  ])
}
