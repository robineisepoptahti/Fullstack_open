import { useState } from 'react'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [numbers, setNumbers] = useState([
    { name: '040-1231244' }
  ]) 
  const [newNumber, setNewNumber] = useState('')
  


  const addEntry = (event) => {
  console.log('addName')
   event.preventDefault()
   const if_found = persons.find(person => person.name === newName)
   if (if_found === undefined)
    {const nameObject = {
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')}
  else 
  {window.alert(`${newName} is already added to phonebook`)
  setNewName('')}
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }  
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addEntry}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
      {persons.map(entry => <div key= {entry.name}>{entry.name} {entry.number}<br /> <br /></div>)}
    </div>
  )

}

export default App