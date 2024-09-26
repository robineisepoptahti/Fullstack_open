import { useState, useEffect } from 'react'
import axios from 'axios'
import ShowAll from './components/showAll'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')
  
  const [newFilter, setNewFilter] = useState('')
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }  
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }  

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }  
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

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with<input value={newFilter} onChange={handleFilterChange} />
        </div>
      <h3>add a new</h3>
      
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
      <h3>Numbers</h3>
      <ShowAll persons = {persons} newFilter={newFilter} />
    </div>
  )
}


export default App