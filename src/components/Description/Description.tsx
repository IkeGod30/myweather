import React from 'react';
import './Description.css';
import { info } from '../Data';

function Description() {
    const style = {
        size:  {
            fontSize: '2rem',
            color: 'orange'

        }
            
    }
  return (
    <div className='describe'>
      <p style={style.size}>Description</p>
    </div>
  )
}

export default Description
