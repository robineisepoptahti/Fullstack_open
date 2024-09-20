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

  const Content = (props) => {
    return (
  <div> 
    <p>{props.part} {props.ex_amount} </p>
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

    <Content part={part1} ex_amount={exercises1}/>
    
    <Content part={part2} ex_amount={exercises2}/>

    <Content part={part3} ex_amount={exercises3}/>

    <Total ex1={part1} ex2={part2} ex3={part3}/>
    </div>
  )
}

export default App