import React, { useState, useEffect, useMemo, useCallback, useReducer } from 'react'

const initialState = {count: 0};

function reducer(state, action, myFunc) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      state;
  }
}

const MyState = () => {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(false)


  const myFunc = params => console.log(params)
  const [state, dispatch] = useReducer(reducer, initialState, myFunc);

  const increment = () => {
    setCount(count + 1)
  }

  // useEffect(() => {
  //   console.log('---runing')

  //   return () => {
  //     console.log('---un-mount')
  //   }
  // })

  // const testMemo = useMemo(() => {
  //   console.log('--memo is runing')
  //   return count + 1
  // }, [count])

  const runUseCallback = useCallback(() => {
    setUser(!user)
    console.log('-----callback is runing')
  }, [count])

  // useEffect(() => {
  //   console.log('giá trị của memo:', testMemo)
  // })

  // useEffect(() => {
  //   console.log('---count--bị thay đổi')
  // }, [count])

  useEffect(() => {
    console.log('--- bị render lại')
  })


  return (
    <>
      <h1>Sử dụng hooks useState trong reactjs</h1>

      <button onClick={increment}>INCREMENT</button>
      <button onClick={() => setUser(!user)}>CHANGE USER</button>
      <button onClick={runUseCallback}>RUN CALLBACK</button>
      <p>Count: {count}</p>

      <hr/>

      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  )
}

export default MyState
