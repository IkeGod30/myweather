import React from 'react';
import './Temp.css';
import { info } from '../Data';

const Temp: React.FC = ()=> {
  return (
    <div className='reading'>
     <p>{info[0].temp} degrees Celcius</p>
    </div>
  )
}

export default Temp
