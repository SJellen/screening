import React, {useContext} from 'react'
import {Context} from '../../Context'


function MovieReview() {

    const {movieReviews, truncateReview} = useContext(Context)
    

    const movieReviewTile = movieReviews && movieReviews.map((item, index) => 
    <div className="item-part-review" key={(index)} >
    <a href={item.url} target="_blank" rel="noopener noreferrer" className="review-link">
        <div className="item-part-review-left">
        <span className="item-review-author"><span className="author-by">by</span> {item.author}</span>
        
    </div>
    <div className="item-review-container">
        <span className="item-review" >{item.content && truncateReview(item.content)}</span>
    </div>
        
    </a>
    </div> 
    
   
    )
    



    return {movieReviewTile}
}

export default MovieReview