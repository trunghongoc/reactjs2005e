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

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps:', {
      newProps,
      oldProps: this.props
    })
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render')
    return (
      <div>
        <button onClick={this.increment}>INCREMENT</button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}

Counter.defaultProps = {
  number: 10
}

export default Counter
