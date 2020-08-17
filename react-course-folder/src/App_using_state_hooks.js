import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

//function based component
const app = props => {
  const [currentPersonState, setPersonState] = useState({
    persons: [
      { name: 'John', age: 10 },
      { name: 'Doe', age: 20 },
      { name: 'Did', age: 30 }
    ]
  });

  const switchNameHandler = () => {
    // console.log('acionado')
    setPersonState({
      persons: [
        { name: 'Jaum', age: 10 },
        { name: 'Sem', age: 20 },
        { name: 'Arm', age: 30 }
      ]
    })
  };

  return (
    <div className="App">
      <h1>Hello world react app</h1>
      <button onClick={switchNameHandler}>Aperte</button>
      <Person name={currentPersonState.persons[0].name} age={currentPersonState.persons[0].age} >Colocando texto no meio</Person>
      <Person name={currentPersonState.persons[1].name} age={currentPersonState.persons[1].age} /> {/* alternativa */}
    </div>
  );

  //initial setup
  // = return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'teste'))

  //class based component. Deprecated in favor of function based.
  // class App extends Component {
  //   state = {
  //     persons: [
  //       {name: 'John', age:10},
  //       {name: 'Doe', age:20},
  //       {name: 'Did', age:30}
  //     ]
  //   }
}

export default app;