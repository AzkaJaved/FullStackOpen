/* eslint-disable react/prop-types */
// import './App.css'

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total  parts={course.parts} />
    </div>
  )
}
// eslint-disable-next-line react/prop-types
const Header =(props) => {
  console.log("props:",props)
  return(
<h1>{props.course}</h1>
  )
}
const Content  = ({parts}) =>{
  return(
    <div>
      <Part part={parts[0].name} exercises = {parts[0].exercises} /> 
      <Part part={parts[1].name} exercises = {parts[1].exercises}/> 
      <Part part={parts[2].name} exercises = {parts[2].exercises} /> 
      
    </div>
  )
}
const Total = ({parts}) => {
  return(
    <div><p>Number of exercises are {parts[0].exercises+parts[0].exercises+parts[0].exercises}</p>
</div>
  )
}
const Part = ({part,exercises}) => {
  return (
    <div>
      <p>{part}{exercises}</p>
    </div>
  )
}

export default App
