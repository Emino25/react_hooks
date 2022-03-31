/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../cssComponet/SearchBox.css"

function SearchBox({search,HandleSearch}) {
  return (
    <div>
        <div className="search-container">
        <input value={search} type="text" name="search" placeholder="Search..." className="search-input" onChange={(e)=>{HandleSearch(e.target.value)}}/>
        <a href="#" className="search-btn">
                <i className="fas fa-search"></i>      
        </a>
    </div>
    </div>
  )
}

export default SearchBox