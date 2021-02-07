import React from 'react'

const Filter = (props) => {
  return (
    <form>
      filter shown with <input value={props.filterValue} onChange={props.filterNames} />   
    </form>  )
}

export default Filter