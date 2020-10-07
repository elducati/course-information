import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  return (
    <div>
      <Header />
      <Content />
      <Total />
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
      <p>Part 1: {props.part1}, Exercises 1: {props.exercises1}</p>
      <p>Part 2: {props.part2}, Exercises 2: {props.exercises2}</p>
      <p>Part 3: {props.part3}, Exercises 3: {props.exercises3}</p>

    </div>
  )
}
const Total = (props) => {
  props = {
    exercises1: 10,
    exercises2: 7,
    exercises3: 14
  }
  return (
  <p>Number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )

}
ReactDOM.render(<App />, document.getElementById('root'))