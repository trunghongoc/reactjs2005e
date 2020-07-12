import React from 'react'

class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }

    this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState({
      count: this.state.count + this.props.number
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>INCREMENT</button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}

export default Counter
