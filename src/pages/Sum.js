import React, { Component } from 'react'
import { withRouter } from "react-router-dom"

class Sum extends Component {
  render() {
    let { a, b } = this.props.match.params
    console.log({
      a,
      b
    })
    a = Number(a)
    if (b === undefined)
      b = '9'
    b = Number(b)
    return <>
      <p>Tổng a + b = {a + b}</p>
    </>
  }
}

export default withRouter(Sum)
