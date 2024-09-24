const Display = ({course}) => {
  return (
<div> 
  {course.parts.map(note => <p key={note.id} >{note.name} {note.exercises}</p>)}
</div>
  )
}


const Header = ({course}) => {
    return(
    <div> 
      <h1>{course.name}</h1>
    </div>
    )
    }

  
  
    const Content = ({course}) => {
      return (
    <div> 
      <Display course = {course} /> 
    </div>
      )
    }
  
    /*
    const Total = (props) => {
    return(
    <div> 
      <p>Number of exercises {props.course.parts[0]['exercises'] + props.course.parts[1]['exercises'] + props.course.parts[2]['exercises']}</p>
    </div>
    )
    }
    */
  
  const Course = ({course}) => {
    return(
    <div>
    <Header course={course}/>

    <Content course={course}/>

    {/* <Total course={course}/> */}
    </div>
  )}


export default Course