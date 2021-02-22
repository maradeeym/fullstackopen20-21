import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'

const App = () => {

  const [ countries, setCountries ] = useState([ ])
  const [ filterValue, setNewValue ] = useState('')


  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const filterNames = (event) => {
    console.log(event.target.value)
    setNewValue(event.target.value)
  } 

  return (
    <div>
      <form>
      find countries <input value={filterValue} onChange={filterNames} />   
      </form>
     <Country countries={countries} filterValue={filterValue} setNewValue={setNewValue} />
     </div>
  );
}

export default App;
