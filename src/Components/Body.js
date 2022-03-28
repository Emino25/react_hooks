import React from 'react'
import "../cssComponet/Body.css"
import AddButton from './AddButton'
import CardLayout from './CardLayout'

function Body({data,HandleAdd,search,rate}) {
  return (
    <div>
        <CardLayout data={data} search={search} rate={rate}/>
        <AddButton HandleAdd={HandleAdd}/>
    </div>
  )
}

export default Body