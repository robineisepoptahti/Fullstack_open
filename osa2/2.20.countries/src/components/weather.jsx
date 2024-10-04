import NoteServices from '../services/persons'
import { useState, useEffect } from 'react'
const api_key = import.meta.env.VITE_SOME_KEY

const Weather = ({land, weather, setWeather}) => {
const lat = land.latlng[0]
const lon = land.latlng[1]

useEffect(() => {
    if (lat && lon && api_key) {
      NoteServices.getWeather({ lat, lon, api_key })
        .then(response => {
          setWeather(response)
          console.log(response)
        })
        .catch(error => {
          console.error('Error fetching weather data:', error)
        })
    }
  }, [lat, lon, api_key, setWeather])
}

export default Weather