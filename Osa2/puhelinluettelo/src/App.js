import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterValue, setNewValue ] = useState('')



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
    setNewValue('')

    setPersons(persons.concat(personObject))
    setNewNumber('')
    }
  }

  const filterNames = (event) => {
    console.log(event.target.value)
    setNewValue(event.target.value)

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
      <h1>Phonebook</h1>
      <form>
      filter shown with <input value={filterValue} onChange={filterNames} />   
      </form>
      <h2>add new</h2>
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
        {persons.filter(person => person.name.toLowerCase().includes(filterValue) || person.name.includes(filterValue)).map((person, number) => 
        <Person person={person} number={number} />
        )}
      </ul>
    </div>
  )

}

export default App