import React, { Component } from 'react'
import logo from './images/logo.svg'
import Button from './atoms/Button'

import './App.css';

const meuClick = () => {
  alert('click')
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Button text='mlk' click={meuClick}/>
        <p className="App-intro">
          ggggostei mesmo! mlk nao tem medo de nad.
        </p>
      </div>
    );
  }
}

export default App;
