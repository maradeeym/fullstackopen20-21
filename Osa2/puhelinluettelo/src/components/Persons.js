import React from 'react'
import Person from './Person'


const Persons = (props) => {
  return (
    <ul>
        {props.persons.filter(person => person.name.toLowerCase().includes(props.filterValue) || person.name.includes(props.filterValue)).map((person) => 
        <Person person={person} key={person.name}/>
        )}
      </ul>
  )
}

export default Persons
