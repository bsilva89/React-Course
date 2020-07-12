import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world react app</h1>
        <button>Aperte</button>
        <Person name="John" age="10">Colocando texto no meio</Person>
        <Person name="Doe" age="20" /> {/* alternativa */}
      </div>
    );
    // = return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'teste'))
  }
}

export default App;
