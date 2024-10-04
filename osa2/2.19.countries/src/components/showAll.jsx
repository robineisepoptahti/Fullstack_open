import ShowEntry from './showEntry'




const ShowAll = ({ countries, newFilter, onChange }) => {
    const notesToShow = newFilter === ''
    ? countries
    : countries.filter(note => note.name.common.toLowerCase().startsWith(newFilter.toLowerCase()))
    console.log(notesToShow.length)
    console.log(notesToShow)
  if (notesToShow.length === 1) {
    const land = notesToShow[0]
    return(
      <div key={land.fife}>
    <h1>{land.name.common}</h1>
    <p>capital {land.capital}</p>
    <p>area {land.area}</p>
    <p><b>languages:</b></p>
    <ul key={land.capital}>
      {Object.values(land.languages).map((lang, index) => <li key={lang}>{lang}</li>)}
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
          <div key={entry.fifa}>
            <ShowEntry name={entry} onChange = {onChange}/>
          </div>
        ))}
      </div>
    )
  }
  }

export default ShowAll

