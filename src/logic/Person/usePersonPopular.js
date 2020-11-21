import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function usePersonPopular() {
    const {posterPath, popularPerson, handlePersonClick}  = useContext(Context)

    
    const popularPersonTile = popularPerson.map((person, index) => 
        <div className="slider-card" key={person.id}> 
        <Link to={`/itemPage/${person.id}`}><img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonClick(index, popularPerson)}/></Link>
        <span className="slider-name">{person.name}</span>
       </div> 
        )

        return {popularPersonTile}
}



export default usePersonPopular