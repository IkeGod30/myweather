import React from 'react';
import './Search.css';

function Search() {
  return (
    <div className='searchBar'>
        <input className='searchInput' type='text' placeholder='Type in a city name'/>
        <button className='searchIcon'><i className='fa fa-search' aria-hidden='true'></i></button>
      
    </div>
  )
}

export default Search
