import axios from 'axios'

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
const getOne = (country) => {
  const url = `https://studies.cs.helsinki.fi/restcountries/api/name/${country}`
  const request = axios.get(url)
  return request.then(response => response.data)
}

const getWeather = ({lat, lon, api_key}) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
  const request = axios.get(url)
  return request.then(response => response.data)
}


export default { 
  getAll: getAll, 
  getOne: getOne,
  getWeather: getWeather,
}