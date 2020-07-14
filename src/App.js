import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter'
import Form from './components/Form'
import ReactDOM from 'react-dom'
import Student from './components/Student'

class App extends Component {
  state = {
    number: 1,
    show: true
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <h1>Lớp học reactjs</h1>
        <Counter number={this.state.number} />

        <Form ref="myForm" />
        <Student />
      </div>
    )
  }
}

export default App;
