import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'


const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 8,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'kakkapylly',
        exercises: 14,
        id: 3
      }
    ]
  }

let intvalue = 0
//const reducer = (acc, cur) => acc + cur.exercises, intvalue;
 
let total = course.parts.reduce((acc, cur) => acc + cur.exercises, intvalue)
console.log(total)

  return (
    <div>
      <Course course={course} />
      <p>Total of {total} exercises</p>
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
