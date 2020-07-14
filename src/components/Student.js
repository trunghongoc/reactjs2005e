import React, { Component } from 'react'

export default class Student extends Component {
  state = {
    students: [{
      id: 1,
      name: 'Nguyễn Văn A'
    }, {
      id: 2,
      name: 'Nguyễn Thị B'
    }, {
      id: 3,
      name: 'Phạm Văn C'
    }]
  }

  generateList = () => {
    const arr = this.state.students.map(student => <li key={student.id}>{student.name}</li>)
    console.log(arr)
    return arr
  }

  render() {
    return (
      <>
        <ul>
          {this.generateList()}
        </ul>
      </>
    )
  }
}