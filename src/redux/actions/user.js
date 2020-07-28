import {
  FETCH_USERS,
  STORE_USERS
} from './actionTypes'

export const fetchUsers = () => ({
  type: FETCH_USERS
})

export const storeUsers = users => ({
  type: STORE_USERS,
  users
})
