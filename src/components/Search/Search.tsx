import React from 'react';
import './Search.css';

function Search() {
  return (
    <div className='searchBar'>
        <input type='text' placeholder='Type in a City name'/>
        <button className='searchIcon'>Search</button>
      
    </div>
  )
}

export default Search
