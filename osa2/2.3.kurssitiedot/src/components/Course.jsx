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
  

    const Total = ({course}) => {
    var total = course.parts.reduce((sum, note) => sum + note.exercises, 0)
    return(
    <div> 
      <b>Number of exercises {total}</b>
    </div>
    )
    }

  
  const Course = ({course}) => {
    return(
    <div>
    <Header course={course}/>

    <Content course={course}/>

    <Total course={course}/> 
    </div>
  )}


export default Course