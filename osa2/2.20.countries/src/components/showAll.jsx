import ShowEntry from './showEntry'
import Weather from './weather'




const ShowAll = ({ countries, newFilter, onChange, weather, setWeather }) => {
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
    <img src={land.flags.png} alt="rendering..." />
    <h1>Weather in {land.capital}</h1>
    <Weather land = {land} weather={weather} setWeather={setWeather}/>
    {weather && (
      <div>
            <img src = {`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Ei näy..." />
            <p><b>temperature:</b>{(weather.main.temp - 273.15).toFixed(2)} Celsius</p>
            <p><b>wind:</b>{weather.wind.speed} m/s</p></div>)}
            
    </div>
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

