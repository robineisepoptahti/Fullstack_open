import { useState, useEffect } from 'react'
import NoteServices from './services/persons'
import ShowAll from './components/showAll'


const Filter = ({ newFilter, handleFilterChange }) => {
  return (
    <div>
      filter shown with <input value={newFilter} onChange={handleFilterChange} />
    </div>
  )
}


const App = () => {
  const [countries, setCountries] = useState([])
  const [newCountry, setNewCountry] = useState('')
  const [newFilter, setNewFilter] = useState('')

  
  
  useEffect(() => {
    NoteServices
      .getAll()
      .then(initialNotes => {
        console.log(initialNotes)
        setCountries(initialNotes)
      })
  }, [])


  const handleCountryChange = (event) => {
    console.log(event.target.value)
    setNewCountry(event.target.value)
  }  


  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }  




  return (
    <div>
        <div>
          find countries<input value={newCountry} onChange={handleCountryChange} />
        </div>
        <div>
          <ShowAll countries={countries} newFilter={newCountry}/>
        </div>

    </div>
  )
}


export default App