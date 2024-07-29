import React from 'react';

import './Main.css';
import Welcome from '../Welcome/Welcome';
import Date_City from '../Date_City/Date_City';
import Description from '../Description/Description';
import Temp from '../Temp/Temp';
import Temperatures from '../Temperatures/Temperatures';
import Search from '../Search/Search';
import WeatherImage from '../WeatherImage/WeatherImage';


function Main() {
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
