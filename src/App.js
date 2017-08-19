import React, { Component } from 'react';
import logo from './blah.png';
import './App.css';
import UsersData from './UsersData.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>blah</h2>
        </div>
        <p className="App-intro">
          <UsersData emotion="very positive" />
          <UsersData emotion="positive" />
          <UsersData emotion="neutral" />
          <UsersData emotion="negative" />
          <UsersData emotion="very negative" />
        </p>
      </div>
    );
  }
}

export default App;
