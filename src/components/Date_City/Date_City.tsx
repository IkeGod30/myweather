import React from 'react';
import './Date_City.css';
import { info } from '../Data';

interface WeatherInfo {
  // city: ()=>{},
  city: string
}

const Date_City: React.FC<WeatherInfo> = ({ city }) => {
  
  
  return (
    <div className='date_city'>
      <div className='date'>Date: {info[0].date}</div>
      <div className='city'>City: {info[0].city}</div>
      
    </div>
  )
}

export default Date_City;
