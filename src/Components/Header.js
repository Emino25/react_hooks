import React from 'react'
import "../cssComponet/Header.css"
import SearchBox from './SearchBox'
import RatingBar from './RatingBar'

function Header({search,HandleSearch,setRate,rate}) {
  return (
    <div className='containe'>
        <SearchBox search={search} HandleSearch={HandleSearch}/>
        <RatingBar setRate={setRate} rate={rate}/>
    </div>
  )
}

export default Header
