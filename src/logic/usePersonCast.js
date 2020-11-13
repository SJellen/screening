import {useContext} from 'react'
import {Context} from '../Context'

function usePersonCast() {

    const {setMediaType, setMovieId, fetchMovieCredits, fetchMovieDetails, setMovieCredits, setTvId, personCredits, getYear, fetchTvDetails, setTvCredits, fetchTvCredits}  = useContext(Context)

    const {cast} = personCredits

    function handleMovieTileClick(e) {
        let selection = sortedCastMovieArr[e].id
        setMediaType('movie')
        setMovieId(selection)
        fetchMovieDetails(selection)
        setMovieCredits([])
        fetchMovieCredits(selection)
        window.scrollTo(0, 0)
      }
  
      function handleTvTileClick(e) {
          let selection = sortedCastTvArr[e].id
          setMediaType('tv')
          setTvId(selection)
          fetchTvDetails(selection)
          setTvCredits([])
          fetchTvCredits(selection)
          window.scrollTo(0, 0)
      }

    let castTvArr = [], castMovieArr = [], otherArr = []
    if (cast !== undefined) {
       for (let i =0; i < cast.length; i++) {
        if (cast[i].media_type === "movie") {
            castMovieArr.push(cast[i])
        } else if (cast[i].media_type === "tv") {
            castTvArr.push(cast[i])
        } else {
            otherArr.push(cast[i])
        }
    } 
    }

    const sortedCastTvArr = castTvArr && castTvArr.sort((a,b) => {
        return parseInt(getYear(b.first_air_date)) - parseInt(getYear(a.first_air_date))
    })

    const sortedCastMovieArr = castMovieArr && castMovieArr.sort((a,b) => {
        return parseInt(getYear(b.release_date)) - parseInt(getYear(a.release_date))
    })

    return {sortedCastTvArr, sortedCastMovieArr, handleMovieTileClick, handleTvTileClick}
}

export default usePersonCast