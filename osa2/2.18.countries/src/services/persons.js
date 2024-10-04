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


export default { 
  getAll: getAll, 
  getOne: getOne,
}