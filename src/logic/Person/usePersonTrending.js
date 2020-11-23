import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function usePersonTrending() {
    const {personTrending, posterPath, handlePersonClick}  = useContext(Context)

 
    const personTrendingTile = personTrending.map((person, index) => 
        
        
        <div className="slider-card" key={person.id}> 
        <Link to={`/personPage/${person.id}`}><img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonClick(index, personTrending)}/></Link>
        <span className="slider-name">{person.name}</span>
        </div>
        )

        return {personTrendingTile}
}


export default usePersonTrending