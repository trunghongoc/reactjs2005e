import React, { useContext } from 'react'
import MyStoreContext from './../contexts/myDemoContext'
import { useSelector, useDispatch } from 'react-redux'

class Button extends React.Component {
  componentDidMount() {
    // console.log('---context:', this.context)
  }

  render() {
    return (
      <>
        <h2>Button component</h2>
        <button onClick={() => this.context.setContext(123)}>Thay đổi context</button>
      </>
    )
  }
}
Button.contextType = MyStoreContext


const Hello = () => {
  const value = useContext(MyStoreContext)
  // console.log('---value:', value)

  return (
    <>
      <h2>Component Hello</h2>
    </>
  )
}


const Text = () => {
  return (
    <>
      <MyStoreContext.Consumer>
        {
          payload => (
            <div>
              <h2>Text Component</h2>
              <pre>
                {JSON.stringify(payload)}
              </pre>
              <p>Type of payload: {typeof payload}</p>
            </div>
          )
        }
      </MyStoreContext.Consumer>
    </>
  )
}

const TestStore = () => {
  const myStore = useSelector(state => state)
  console.log('----my-store:', myStore)
  const dispatch = useDispatch()

  return (
    <>
      <h2>Test store component</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
      <p>Count: {myStore.count}</p>
    </>
  )
}

const MyContext = () => {
  return (
    <>
      <h1>Context page</h1>
      <Button />
      <Text />
      <Hello />
      <hr />
      <TestStore />
    </>
  )
}

export default MyContext
