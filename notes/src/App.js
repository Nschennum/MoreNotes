import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './components/Note'

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }
  componentDidMount() {
    fetch('')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ notess: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">Lovely Notes</h1>
        <Note {...this.state} />
      </div>
    );
  }
}

export default App;


