import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter'

class App extends Component {
  state = {
    number: 1
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        number: 10
      })
    }, 6000)
  }

  render() {
    return (
      <div>
        <h1>Lớp học reactjs</h1>
        <Counter number={this.state.number}/>
        <Counter
          number={2}
          name="Hoa"
          hobby={"football"} />
        <Counter number={3}/>
      </div>
    )
  }
}

export default App;
