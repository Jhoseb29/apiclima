import axios from 'axios'

const getDatesWeather =  (lat, lon) =>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=592dd3a472d9d74b7aee3b4dad82e9e8&units=metric`;
    const req = axios(URL)
    return req
}
export default getDatesWeather