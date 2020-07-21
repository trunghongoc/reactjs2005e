import React, { useState } from 'react'
import MyState from './MyState'

const Hooks = () => {
  const [show, setShow] = useState(true)

  return (
    <>
      <h1>Học Hooks</h1>
      <button onClick={() => setShow(!show)}>TOGGLE</button>

      { show && <MyState /> }
    </>
  )
}

export default Hooks