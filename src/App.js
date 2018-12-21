import React, { Component } from 'react';
import './App.css';
// import Dashboard from './component/Dashboard/Dashboard';
// import Wizard from  './component/Wizard/Wizard';
import Header from './component/Header/Header';
// import {Link} from 'react-router-dom';
import route from './route'
//no state and no methods

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>

      {route}

      </div>
    );
  }
}

export default App;
