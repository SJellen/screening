import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function useSearchResultsPerson() {
    const {posterPath, handlePersonClick, searchResultsPerson}  = useContext(Context)

    const searchResultsPersonTile = searchResultsPerson && searchResultsPerson.map((person, index) => 
    <div className="slider-card" key={person.id}> 
    <Link to={`/personPage/${person.id}`}><img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonClick(index, searchResultsPerson, true)}/></Link>
    <span className="slider-name">{person.name}</span>
   </div> 
    )

    return {searchResultsPersonTile}
}



export default useSearchResultsPerson