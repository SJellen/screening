import React, {useContext, useState} from 'react'
import {Context} from '../Context'


function TvReview() {

    const {tvReviews, truncateReview} = useContext(Context)
    

    const tvReviewTile = tvReviews && tvReviews.map((item, index) => 
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
    



    return {tvReviewTile}
}

export default TvReview