import React from 'react'


const Country = (props) => {

const results = props.countries.filter(country => country.name.toLowerCase().includes(props.filterValue) || country.name.includes(props.filterValue) )

const showCountry = props.countries.filter((country) => (country.name.toLowerCase().includes(props.filterValue) || country.name.includes(props.filterValue))).map((country) => country.name + ' ')
const Capital = props.countries.filter((country) => (country.name.toLowerCase().includes(props.filterValue) || country.name.includes(props.filterValue))).map((country) => country.capital)
const Population = props.countries.filter((country) => (country.name.toLowerCase().includes(props.filterValue) || country.name.includes(props.filterValue))).map((country) => country.population)
const languages = props.countries.filter((country) => (country.name.toLowerCase().includes(props.filterValue) || country.name.includes(props.filterValue))).map((country) => country.languages.map(languages => (
  <li> {languages.name} </li>)))
const flag = props.countries.filter((country) => (country.name.toLowerCase().includes(props.filterValue) || country.name.includes(props.filterValue))).map((country) => country.flag)




if(props.filterValue === '')
return (
    <div>
    <p>No Countries To Show</p>
    </div>
  )

if(results.length > 10)
return (
    <div>
    <p>Too Many Matches...</p>
    </div>
  )

if(results.length > 1)
return (
    <div>
    {showCountry}
    </div>
  )

  else
  return (
    <div>
    <h1>
    {showCountry}
    </h1>
    <p>Capital {Capital}</p>
    <p>Population {Population}</p>
    <h2>Languages</h2>
    {languages}
    <img src={flag} alt="No flag found" height="100" width="140" />
    </div>
  )
}

export default Country;