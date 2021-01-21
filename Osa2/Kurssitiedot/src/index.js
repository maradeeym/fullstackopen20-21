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
      }
    ]
  }
/*
let intvalue = 0 
let total = course.parts.reduce((acc, cur) => acc + cur.exercises, intvalue)
console.log(total)
*/
  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))