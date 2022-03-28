import React from 'react'
import { Rating } from 'react-simple-star-rating';
import "../cssComponet/CardLayout.css"


function CardLayout(props) {
    const existArray = props.data;
    const searchMovie= props.search;
    const rating = props.rate
    const newArray = existArray.filter(
        (el)=>el.name.toLowerCase().includes(searchMovie.toLowerCase()) && el.rate>=rating
    ).map(function (value,i) {
        return (
            <div class="card" key={i}>
                <img src={value.img} alt="" />
                <div class="descriptions">
                    <h1>{value.name}</h1>
                    <p>
                    <Rating  ratingValue={value.rate} readonly={true}/* Available Props */ />
                    </p>
                    <button>
                        <i class="fab fa-youtube"></i>
                        Play trailer on YouTube
                    </button>
                </div>
            </div>
        );
    })
    console.log(existArray.filter(
        (el)=>el.name.toLowerCase().includes(searchMovie.toLowerCase()) && el.rate>=rating
    ));
    return (
        <div>
            <div className='CardLayout'>
                <div class="wrapper">
                    {newArray}
                </div>
            </div>
        </div>
    )
}

export default CardLayout


