import React, { Component } from 'react';
import classesCSS from './App.css';
import Persons from '../components/Persons/Persons.js';
import Cockpit from '../components/Cockpit/Cockpit.js';
import AuthContext from "../context/auth-context";

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'John', age: 10 },
      { id: '2', name: 'Doe', age: 20 },
      { id: '3', name: 'Did', age: 30 }
    ],
    otherState: 'Some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('acionado')
    this.setState({
      persons: [
        { name: 'Jaum', age: 10 },
        { name: newName, age: 20 },
        { name: 'Arm', age: 30 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    } // alternative const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons] //alternative const persons = this.state.persons.slice()
    persons.splice(index, 1)
    this.setState({ persons: persons })
  }

  render() {
    let persons = null
    if (this.state.showPersons) {
      persons =
        <Persons
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler} />
    };

    return (
      <AuthContext.Provider
        value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler
        }}
      >
        <div className={classesCSS.App}>
          <Cockpit 
            showPersons={this.state.showPersons}
            persons = {this.state.persons}
            clicked = {this.togglePersonHandler}/>
          {persons}
          {this.state.showPersons ? <div> some dummy HTML from ternary conditional </div> : null}
        </div>
      </AuthContext.Provider>
    );
  }
}

//export default Radium(App);
export default App;