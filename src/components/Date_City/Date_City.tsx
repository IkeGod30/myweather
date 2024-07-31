import React from 'react';
import './Date_City.css';
import { info } from '../Data';

const Date_City : React.FC<{}> = (props)=> {
  return (
    <div className='date_city'>
      <div className='date'>Date: {info[0].date}</div>
      <div className='city'>City: {info[0].city}</div>
      
    </div>
  )
}

export default Date_City;
