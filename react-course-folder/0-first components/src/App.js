import React, { Component } from 'react';
//import Radium, { StyleRoot } from 'radium'
// import styled from "styled-components";
import classesCSS from './App.css';
import Person from './Persons/Person/Person';

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
    let btnClass = [classesCSS.Button]

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          <div> Static array of Person objects: </div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}>
            Colocando texto no meio</Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'EventoClickComBind')}
            changed={this.nameChangedHandler} />
        </div>
      )
    }

    let persons2 = null
    if (this.state.showPersons) {
      persons2 = (
        <div>
          <div> This was made iteration through state object</div>
          {this.state.persons.map((personData, index) => {
            return <Person
              name={personData.name}
              age={personData.age}
              click={() => this.deletePersonHandler(index)}
              key={personData.id}
              changed={(event) => this.nameChangedHandler(event, personData.id)} />
          })}
        </div>
      )

      btnClass.push(classesCSS.Red)

    }

    let assignedClasses = [classesCSS.green]
    if (this.state.persons.length <= 2) {
      assignedClasses = [classesCSS.bold, classesCSS.red].join(' ')
    }

    return (
      <div className={classesCSS.App}>
        <h1>Hello world react app</h1>
        <p className={assignedClasses}>Demo text</p>
        <p>{btnClass.join(' ')}</p>
        <button className={btnClass.join(' ')}
          onClick={this.togglePersonHandler}>Mostrar: {String(this.state.showPersons)}
        </button>
        {persons}
        {this.state.showPersons ? <div> some dummy HTML from ternary conditional </div> : null}
        {persons2}
      </div>
    );
    // = return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'teste'))
  }
}

//export default Radium(App);
export default App;