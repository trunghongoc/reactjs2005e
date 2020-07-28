import React from 'react'
import './App.css'

import A from './components/A'
import B from './components/B'

import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <h1>Redux</h1>
        <hr/>
        <A/>
        <hr/>
        <B />
      </Provider>
    </>
  );
}

export default App
