import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { 
    name: 'Arto Hellas',
    number: '040 4379789' 
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')


  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    if (persons.filter(person => person.name === personObject.name).length > 0 && 
        persons.filter(person => person.number === personObject.number).length > 0) {
      window.confirm(
        `${personObject.name} on jo luettelossa`)
      }
    
    else {
    setPersons(persons.concat(personObject))
    setNewName('')

    setPersons(persons.concat(personObject))
    setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  console.log(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, number) => 
        <Person person={person} number={number} />
        )}
      </ul>


    </div>
  )

}

export default App