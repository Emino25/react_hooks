import React from 'react'
import { Rating } from 'react-simple-star-rating'
import "../cssComponet/RatingBar.css"

function RatingBar({setRate,rate}) {
    const handleRAte = (r) => {
        setRate(r)
    }
    return (
        <div class="rating-css">
            
            <Rating onClick={handleRAte} ratingValue={rate} /* Available Props */ />
        </div>
    )
}

                            export default RatingBar