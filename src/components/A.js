import React from 'react'
import { useDispatch } from 'react-redux'
import { increment as incrementAction } from './../redux/actions/count'
import { fetchUsers as fetchUsersAction } from './../redux/actions/user'

const A = () => {
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(incrementAction(6))
  }

  const fetchUsers = () => {
    dispatch(fetchUsersAction())
  }

  return (
    <>
      <h2>Component A</h2>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={fetchUsers}>FETCH USERS</button>
    </>
  )
}

export default A
