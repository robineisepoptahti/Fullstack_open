import ShowEntry from './showEntry'




const ShowAll = ({ countries, newFilter }) => {
    const notesToShow = newFilter === ''
    ? countries
    : countries.filter(note => note.name.common.toLowerCase().startsWith(newFilter.toLowerCase()))
    console.log(notesToShow.length)
    console.log(notesToShow)
  if (notesToShow.length === 1) {
    const land = notesToShow[0]
    return(
      <div>
    <h1>{land.name.common}</h1>
    <br />
    <p>capital {land.capital}</p>
    <p>area {land.area}</p>
    <br />
    <p><b>languages:</b></p>
    <ul>
      {Object.values(land.languages).map(lang => <li key={land.name.common}>{lang}</li>)}
    </ul>
    <img src={land.flags.png} alt="rendering..." /></div>
    )
  }
  else if (notesToShow.length === 0) {
    return(
  <p>No countries found</p>)
  }
  else if (notesToShow.length > 10)
  {
    return(
    <p>Too many matches, specify another filter</p>)
  } 
  else {
    return (
      <div> 
        {notesToShow.map(entry => (
          <div key={entry.name.common}>
            <ShowEntry name={entry} />
          </div>
        ))}
      </div>
    )
  }
  }

export default ShowAll

