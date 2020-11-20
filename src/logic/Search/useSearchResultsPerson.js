import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function useSearchResultsPerson() {
    const {posterPath, setItemPageOpen, setPersonId, fetchPersonDetails, setMediaType, searchResultsPerson, fetchPersonCredits,fetchPersonImages}  = useContext(Context)


    function handleSearchPersonClick(e) {
        let selection = searchResultsPerson[e].id
        setMediaType('person')
        setPersonId(selection)
        fetchPersonDetails(selection)
        fetchPersonCredits(selection)
        fetchPersonImages(selection)
        setItemPageOpen(true)
        window.scrollTo(0, 0)
    }

    const searchResultsPersonTile = searchResultsPerson && searchResultsPerson.map((person, index) => 
    <div className="slider-card" key={person.id}> 
    <Link to={`/itemPage/${person.id}`}><img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handleSearchPersonClick(index)}/></Link>
    <span className="slider-name">{person.name}</span>
   </div> 
    )

    return {searchResultsPersonTile}
}



export default useSearchResultsPerson