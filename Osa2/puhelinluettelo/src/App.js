import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: persons.length + 1,
    }

    if (persons.filter(person => person.name === personObject.name).length > 0){
      window.confirm(
        `${personObject.name} on jo luettelossa`)
    }
    else
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  console.log(persons)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input
          value={newName}
          onChange={handleNameChange}
           />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => 
        <Person key={i} person={person} />
        )}
      </ul>


    </div>
  )

}

export default App