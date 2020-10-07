import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  return (
    <div>
      <Header />
      <Content />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}
const Header = (props) => {
  props = {
    course: "Half Stack application development"
  }
  return (
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  props = {
    part1: 'Fundamentals of React',
    exercises1: 10,
    part2: 'Using props to pass data',
    exercises2: 7,
    part3: 'State of a component',
    exercises3: 14

  }
  return (
    <div>
      <p>{props.part1}{props.exercises1}</p>
      <p>{props.part2}{props.exercises2}</p>
      <p>{props.part3}{props.exercises3}</p>

    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))