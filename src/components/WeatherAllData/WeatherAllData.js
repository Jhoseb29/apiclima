import './WeatherAllData.css';
import { useEffect, useState} from 'react'
import getDatesWeather from '../../services/getDatesWeather';
import Weather from '../Weather/Weather'
import Loader from '../Loader/Loader';

function WeatherAllData() {
  
  // Estados para la información y ubicación

  const [temp, setTemp] = useState('')
  const [location, setLocation] = useState(false)
  const [icon, setIcon] = useState('01d')
  const [humidity, setHumidity] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [clouds, setClouds] = useState('')
  const [weatherDescription, setWeatherDescription] = useState('')
  const [wind, setWind] = useState('')
  const [isLoading, setLoading] = useState(true); 

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos)=>{

      setLocation(true)
     getDatesWeather(pos.coords.latitude, pos.coords.longitude)
      .then((res) =>{
        setIcon(res.data.weather[0].icon)
        setHumidity(res.data.main.humidity)
        setCity(res.data.name)
        setCountry(res.data.sys.country)
        setTemp(res.data.main.temp)
        setClouds(res.data.clouds.all)
        setWeatherDescription(res.data.weather[0].description)
        setWind(res.data.wind.speed)
        setLoading(false);
        console.log(res.data)
      })
    })  
  }, [])

 

  return (
    <div className="WeatherAllData">
      {(isLoading) ? <Loader /> : <Weather icon={icon} weatherDescription={weatherDescription}  city={city} country={country} temp={temp} humidity={humidity} clouds={clouds} wind={wind} location={location}/>}
    </div>
  );
}

export default WeatherAllData;
