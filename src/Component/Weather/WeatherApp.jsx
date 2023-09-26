import { useState } from 'react';
import { useEffect } from 'react';
import './WeatherApp.css'

import search_icon from '../Assets/search.png'
import clear_icon from '../Assets/clear.png'
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
import wind_icon from '../Assets/wind.png'
import humidity_icon from '../Assets/humidity.png'
const WeatherApp = () => {
    const [wicon, setWicon] = useState(cloud_icon);
    const [inputValue, setInputValue] = useState('');
    

    const search = async (e)=>{
        console.log(e)
        
        const element = document.getElementsByClassName("cityInput")
        console.log(element[0].value)
        let dataCopy ;
        
        try {
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue || e }&appid=52008e0807c7194ee1f1d0750bf3f0d0&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        dataCopy =data
        
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate")
        const temprature = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")
        const descrip = document.getElementsByClassName("descrip")
        humidity[0].innerHTML = data.main.humidity+ " %";
        console.log(descrip)
        descrip[0].innerHTML = data.weather[0].description
        wind[0].innerHTML = data.wind.speed+ " km/h";
        temprature[0].innerHTML = Math.floor(data.main.temp) + "&#x2103"  ;
        location[0].innerHTML = data.name;
        
        if(data.weather[0].icon === '01d'|| data.weather[0].icon === '01n' ){
            setWicon(clear_icon)
        }
        else if(data.weather[0].icon === '02d'|| data.weather[0].icon === '02n' ){
            setWicon(cloud_icon)
        }
        else if(data.weather[0].icon === '03d'|| data.weather[0].icon === '03n' ){
            setWicon(drizzle_icon)
        }
        else if(data.weather[0].icon === '04d'|| data.weather[0].icon === '04n' ){
            setWicon(drizzle_icon)
        }
        else if(data.weather[0].icon === '09d'|| data.weather[0].icon === '09n' ){
            setWicon(rain_icon)
        }
        else if(data.weather[0].icon === '10d'|| data.weather[0].icon === '10n' ){
            setWicon(rain_icon)
        }
        else if(data.weather[0].icon === '13d'|| data.weather[0].icon === '13n' ){
            setWicon(snow_icon)
        }
        else{
            setWicon(clear_icon)
            
        }
          
        } catch (error) {
          console.log(dataCopy)
          const location = document.getElementsByClassName("weather-location")
          location[0].innerHTML = dataCopy.message;
          
        }
        


    }

    useEffect(() => {
      search("karachi")
  }, [inputValue]);
// di
  function inputChangeHandler(val) {
    setInputValue(val.target.value)
}

  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="cityInput" value={inputValue} onChange={inputChangeHandler} />
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className='descrip'></div>
      <div className="weather-temp">
    
      </div>
      <div className="weather-location">
        
      </div>
      <div className="data-container">
        <div className="element">
            <img src={humidity_icon} alt="" className='icon' />
            <div className="data">
                <div className="humidity-percent"></div>
                <div className="text">Humidity</div>
            </div>
        </div>
        <div className="element">
            <img src={wind_icon} alt="" className='icon' />
            <div className="data">
                <div className="wind-rate"></div>
                <div className="text">Wind Speed</div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default WeatherApp
