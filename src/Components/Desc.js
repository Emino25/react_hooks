import React from 'react'
import { useParams } from 'react-router-dom'
import "../cssComponet/Desc.css"
import { Rating } from 'react-simple-star-rating';

const Desc = (props) => {
    let { id } = useParams();
  let  obj= props.data.find((el)=>el.id==id)
  console.log(obj);
    return (
        <div>
           <div class="movie-card">
<div class="container">
    <a href="#"><img src={obj.img} alt="cover" class="cover" width="200" height="300"/></a>
    <div class="hero">
        <div class="details">
            <div class="title1">{obj.name} <span className='span-pg'>PG-30</span></div>
            <Rating readonly={true} ratingValue={obj.rate}  />
        </div> 
    </div> 
    <div class="description">
        <div class="column1">
        </div> 
        <div class="column2">
            <p>{obj.description}</p>
        </div> 
    </div> 
</div> 
</div>
        </div>
    )
}

export default Desc
