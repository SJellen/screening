import React, {useContext, useState} from 'react'
import {Context} from '../Context'


function MovieReview() {

    const {movieReviews, truncateReview} = useContext(Context)
    // const {author, content, id, url} = movieReviews
    console.log(movieReviews)

    function handleReviewClick(e) {

    }

    const movieReviewTile = movieReviews && movieReviews.map((item, index) => 
    <div className="item-part-review" key={(index)} >
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="review-link">
        <div className="item-part-review-left">
        <span className="item-review-author"><span className="author-by">by</span> {item.author}</span>
        
    </div>
        <span className="item-review" >{item.content && truncateReview(item.content)}</span>
    </a>
    </div> 
    
   
    )
    



    return {movieReviewTile}
}

export default MovieReview