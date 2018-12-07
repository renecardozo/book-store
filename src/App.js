import React, { Component } from 'react';
import './App.css';
import Router from './router';
import Menu from './components/menu/Menu';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)
class App extends Component {
  render() {
    return (  
      <div className="App-header">
        <Menu />
        <br></br>
        <Router />
      </div>
    );
  }
}

export default App;
