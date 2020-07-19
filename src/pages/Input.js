import React, { Component } from 'react'
import MyHOC from './../components/MyHOC'

class Input extends Component {
  render() {
    const { type } = this.props

    return (
      <>
        <input type={type} />
      </>
    )
  }
}

Input.defaultProps = {
  type: 'text'
}

export default MyHOC(Input)