import React from 'react';

import './Main.css';
import Welcome from '../Welcome/Welcome';
import Date_City from '../Date_City/Date_City';
import Description from '../Description/Description';
import Temp from '../Temp/Temp';
import Temperatures from '../Temperatures/Temperatures';
import Search from '../Search/Search';
import WeatherImage from '../WeatherImage/WeatherImage';

import axios from 'axios';


function Main() {
    const getWeather = async()=> {
        try {
            const weatherDataFetch = await fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=be69986a27fff2945a8def7bd4e36055', {
                headers: {
                    Accept: 'application/json'
                }
            });
            const weatherDat = await weatherDataFetch.json();
        console.log(weatherDat)
        }
        catch(error) {
            console.log(error)
        }

        // const weatherDat = await weatherDataFetch.json();
        // console.log(weatherDat)

    }
   getWeather()
  return (
    <div className='main'>
        <Welcome />
        <Search />
        <Date_City />
        <WeatherImage />
        <Description />
        <Temp />
        <Temperatures />
      
    </div>
  )
}

export default Main
