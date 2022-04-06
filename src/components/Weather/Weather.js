import React from 'react';
import '../Weather/Weather.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {  faCloud, faDroplet, faWind } from '@fortawesome/free-solid-svg-icons'

import {useState} from 'react'

const Weather = ({icon, city, country, temp, weatherDescription, humidity, clouds, wind}) => {
    
    
    // Estado para el cambio de grados

    const [fahrenheit, setFahrenheit] = useState(0)

    // 

    return (
        <div className='container'>

            <div className='location'>
                <h2>{city}, {country}</h2>
            </div>
            <hr />
            <div className='clouds'>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
                <p>{weatherDescription}</p>
            </div>

            <div className='degrees'>
       <p>{fahrenheit ? temp : (temp * 9/5) + 32 }{fahrenheit ? '°C' : '°F'}</p>
                <a href='#' className='button'  onClick={() => setFahrenheit(!fahrenheit)}> <span>{fahrenheit ? 'Fahrenheit' : 'Centigrados'}</span> </a> 
           </div> 

          
            <div className='details'>
                
                <div className='humidity'>
                    <p><FontAwesomeIcon icon={faDroplet} /></p>
                    <p>Humidity</p> 
                    <span>{humidity} %</span>       
                </div>
                <div className='cloudy'>
                    <p><FontAwesomeIcon icon={faCloud} /></p>
                    <p>Cloudy</p>
                    <span>{clouds} %</span>
                </div>
                <div className='wind'>
                    <p><FontAwesomeIcon icon={faWind} /></p>
                    <p>Wind</p>
                    <span>{wind} m/s</span> 
                </div>
             </div>
          </div>  
        
    );
};

export default Weather;