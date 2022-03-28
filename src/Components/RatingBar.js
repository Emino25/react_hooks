import React from 'react'
import { Rating } from 'react-simple-star-rating'
import "../cssComponet/RatingBar.css"

function RatingBar({setRate,rate}) {
    const handleRAte = (r) => {
        setRate(r)
    }
    return (
        <div class="rating-css">
            {/* <div class="star-icon">
                <input type="radio" name="rating1" id="rating1"/>
                <label for="rating1" class="fa fa-star"></label>
                <input type="radio" name="rating1" id="rating2"/>
                <label for="rating2" class="fa fa-star"></label>
                <input type="radio" name="rating1" id="rating3"/>
                <label for="rating3" class="fa fa-star"></label>
                <input type="radio" name="rating1" id="rating4"/>
                <label for="rating4" class="fa fa-star"></label>
                <input type="radio" name="rating1" id="rating5"/>
                <label for="rating5" class="fa fa-star"></label>
            </div> */}
            <Rating onClick={handleRAte} ratingValue={rate} /* Available Props */ />
        </div>
    )
}

                            export default RatingBar