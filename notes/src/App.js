import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.css';
import { Route } from "react-router";
import Register from "./components/Register";
import Login from "./components/Login";
import Notes from "./components/Notes";

class App extends Component {  
render() {
    return (
      <div className="App">
        <h1 className="Header">Lovely Notes</h1>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/notes" component={Notes} />
      </div>
    );
  }
}

export default App;


