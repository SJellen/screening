import React, {useContext} from 'react'
import {Context} from '../Context'
import blankSquare from '../assets/placeholder.jpg'

function useTvCast() {

    const {tvCredits, setMediaType, setPersonId, fetchPersonCredits, fetchPersonDetails, posterPath, setItemPageOpen}  = useContext(Context)

    const {crew, cast} = tvCredits

    // console.log(cast)

    

    
    
    // let castTvArr = [], castMovieArr = [], otherArr = []
    // if (cast !== undefined) {
    //    for (let i =0; i < cast.length; i++) {
    //     if (cast[i].media_type === "movie") {
    //         castMovieArr.push(cast[i])
    //     } else if (cast[i].media_type === "tv") {
    //         castTvArr.push(cast[i])
    //     } else {
    //         otherArr.push(cast[i])
    //     }
    // } 
    // }

    

    // const sortedCastTvArr = castTvArr && castTvArr.sort((a,b) => {
    //     return parseInt(getYear(b.first_air_date)) - parseInt(getYear(a.first_air_date))
    // })

    // const sortedCastMovieArr = castMovieArr && castMovieArr.sort((a,b) => {
    //     return parseInt(getYear(b.release_date)) - parseInt(getYear(a.release_date))
    // })


    function handlePersonCreditClick(e) {
        let selection = cast[e].id
        setMediaType('person')
        setPersonId(selection)
        fetchPersonDetails(selection)
        fetchPersonCredits(selection)
        // setItemPageOpen(prevState => !prevState)
        window.scrollTo(0, 0)
    }


    const castTvTile = cast && cast.map((person, index) => 

         
        <div className="slider-card" key={person.id}> 
        <img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonCreditClick(index)}/>
        <span className="slider-name">{person.name}</span>
        <span className="slider-character">{person.character}</span>
       </div> 
        )

    
    
    return {castTvTile}
}

export default useTvCast