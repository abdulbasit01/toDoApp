import React, { Component } from 'react';
import AppList from "./Components/newToDo.jsx";
import './App.css';

class App extends Component {
  render() {
    return ( 
      <div className="App">
        <AppList/>
      </div>
    );
  }
}

export default App;
