import React from 'react';
import './Temperatures.css';
import { info } from '../Data';

function Temperatures() {
  return (
    <div className='temps'>
        <h6>Highs: {info[0].high}</h6>
        <h6>Lows: {info[0].low}</h6>
      
    </div>
  )
}

export default Temperatures
