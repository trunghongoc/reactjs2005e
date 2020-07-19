import React, { Component } from 'react'
import Board from './../components/Board'
import Task from './../components/Task'

import { v4 } from 'uuid'

class ToDo extends Component {
  state = {
    todo: {
      willDo: {
        title: 'Dự định',
        tasks: [
          { id: v4(), name: 'Nấu ăn' }
        ]
      },
      doing: {
        title: 'Đang làm',
        tasks: []
      },
      finished: {
        title: 'Đã làm',
        tasks: []
      }
    },
    board: 'willDo',
    task: ''
  }

  generateBoards = () => {
    const boards = []
    const { todo } = this.state
    let index = 0
    for (let key in todo) {
      if (todo.hasOwnProperty(key)) {
        index++
        const tasks = todo[key].tasks
        boards.push(
          <div className="board" key={index}>
            <p>{todo[key].title}</p>
            { this.generateTasks(tasks) }
          </div>
        )
      }
    }
    return boards
  }

  generateTasks = tasks => {
    return tasks.map((task, index) => {
      return (
        <div key={index} className="task">
          {task.name}
          <button onClick={() => this.deleteTask(task.id)}>Xóa</button>
        </div>
      )
    })
  }

  deleteTask = id => {
    alert('xóa ' + id)
  }

  handleOnChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  add = () => {
    let board = this.state.todo[this.state.board]
    const task = {
      id: v4(),
      name: this.state.task
    }
    board.tasks = [...board.tasks, task]
    const todo = this.state.todo
    todo[this.state.board] = board
    this.setState({
      todo
    })
  }


  render() {
    const { board, task } = this.state
    return(
      <>
        <h1>Todo App</h1>
        <div className="form">
          <label>Chọn loại công việc</label>
          <select name="board" value={board} onChange={this.handleOnChange}>
            <option value="willDo">Sắp làm</option>
            <option value="doing">Đang làm</option>
            <option value="finished">Đã làm</option>
          </select>

          <label>Tên công việc:</label>
          <input name="task" value={task} onChange={this.handleOnChange} />

          <button onClick={this.add}>Add</button>
        </div>

        <div className="todo">
          {this.generateBoards()}
        </div>
      </>
    )
  }
}

export default ToDo
