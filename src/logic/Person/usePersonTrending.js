import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function usePersonTrending() {
    const {personTrending, posterPath, setItemPageOpen, setPersonId, fetchPersonDetails, setMediaType, fetchPersonCredits, fetchPersonImages}  = useContext(Context)

    function handlePersonTrendingClick(e) {
        let selection = personTrending[e].id
        setMediaType('person')
        setPersonId(selection)
        fetchPersonDetails(selection)
        fetchPersonCredits(selection)
        fetchPersonImages(selection)
        setItemPageOpen(prevState => !prevState)
        window.scrollTo(0, 0)
    }
 
    const personTrendingTile = personTrending.map((person, index) => 
        
        
        <div className="slider-card" key={person.id}> 
        <Link to={`/itemPage/${person.id}`}><img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonTrendingClick(index)}/></Link>
        <span className="slider-name">{person.name}</span>
        </div>
        )

        return {personTrendingTile}
}


export default usePersonTrending