import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

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
      <Filter filterValue={filterValue} filterNames={filterNames}  />
      <h2>add new</h2>
      <PersonForm addName={addName}  newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} filterValue={filterValue} />
    </div>
  )

}

export default App