import React from 'react';
import './Description.css';
import { info } from '../Data';

const Description: React.FC = ()=> {
    const style = {
        size:  {
            fontSize: '2rem',
            color: 'orange'
        }      
    }
  return (
    <div className='describe'>
      <p style={style.size}>Description: {info[0].description}</p>
    </div>
  )
}

export default Description
