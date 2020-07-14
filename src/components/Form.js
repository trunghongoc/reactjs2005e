import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    value: ''
  }

  onChange = event => {
    const { value } = event.target
    this.setState({
      value
    })
  }

  showAlert = () => {
    alert('hello')
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={this.onChange}/>
        <p>{this.state.value}</p>
      </div>
    )
  }
}