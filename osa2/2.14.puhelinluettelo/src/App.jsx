import { useState, useEffect } from 'react'
import NoteServices from './services/persons'
import ShowAll from './components/showAll'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')
  
  const [newFilter, setNewFilter] = useState('')
  
  useEffect(() => {
    NoteServices
      .getAll()
      .then(initialNotes => {
        setPersons(initialNotes)
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

  const deleteEntry = (entry) => {
    if (window.confirm("Delete " + entry.name + "?")){
    const id = entry.id
    console.log("Deleting id" + id)
    NoteServices
    .deleteName(id)
    .then(() => {
      setPersons(persons.filter(person => person.id !== id))
    })}
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
      NoteServices
      .create(nameObject)
      .then(response => {
        console.log(response)
        setPersons(persons.concat(response))
        setNewName('')
        setNewNumber('')}
      )}
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
      <ShowAll persons = {persons} newFilter={newFilter} deleteEntry = {deleteEntry} />
    </div>
  )
}


export default App