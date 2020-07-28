import {
  INCREMENT,
  DESCREMENT
} from './actionTypes'

export const increment = (number = 1) => ({
  type: INCREMENT,
  number
})

export const descrement = (number = 1) => ({
  type: DESCREMENT,
  number
})
