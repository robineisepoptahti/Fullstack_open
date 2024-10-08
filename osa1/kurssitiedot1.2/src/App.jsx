const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
  return(
  <div> 
    <h1>{props.course}</h1>
  </div>
  )
  }
  const Part = (props) => {
    return (
  <div> 
    <p>{props.pt} {props.ex} </p>
  </div>
    )
  }


  const Content = (props) => {
    return (
  <div> 
    <Part pt = {props.pt1} ex = {props.ex1} /> 
    <Part pt = {props.pt2} ex = {props.ex2} /> 
    <Part pt = {props.pt3} ex = {props.ex3} /> 
  </div>
    )
  }

  const Total = (props) => {
  return(
  <div> 
    <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
  </div>
  )
  }

  return (
    <div>
    <Header course={course}/>

    <Content pt1={part1} ex1={exercises1} pt2={part2} ex2={exercises2} pt3={part3} ex3={exercises3}/>

    <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
    </div>
  )
}

export default App