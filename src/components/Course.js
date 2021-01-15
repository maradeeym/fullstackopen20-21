import React from 'react'

const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Part = ({name, exercises}) => {
    return (
      <p>
        {name} {exercises}
      </p>
    )
  }

const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map((part) => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </div>
    )
  }

const Course = ({course}) => {
    return(
        <div>
        <Header course={course} />
        <Content course={course} />
        </div>
    )
}

export default Course