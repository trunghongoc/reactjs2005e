import React from 'react'
import { useSelector } from 'react-redux'

const B = () => {
  const store = useSelector(state => state.counterReducer)
  const users = useSelector(state => state.userReducer)
  console.log(store)

  return (
    <>
      <h2>Component B</h2>
      <p>Count: {store.count}</p>
      <pre>
        {JSON.stringify(users)}
      </pre>
    </>
  )
}

export default B
