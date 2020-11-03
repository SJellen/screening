import { useContext } from 'react'
import {Context} from '../Context'

function usePersonPopular() {
    const {posterPath, popularPerson}  = useContext(Context)
    

    const popularPersonTile = popularPerson.map(person => 
        
        <div className="popular-card" key={person.id}> 
        <img  src={`${posterPath}${person.profile_path}`} alt="poster"/>
        <span className="popular-name">{person.name}</span>
        </div>
        )

        return {popularPersonTile}
}



export default usePersonPopular