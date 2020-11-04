import { useContext } from 'react'
import {Context} from '../Context'

function usePersonPopular() {
    const {posterPath, popularPerson}  = useContext(Context)
    
    console.log(popularPerson)
    const popularPersonTile = popularPerson.map(person => 
        <div className="slider-card" key={person.id}> 
        <img  src={`${posterPath}${person.profile_path}`} alt="poster"/>
        <span className="slider-name">{person.name}</span>
       </div> 
        )

        return {popularPersonTile}
}



export default usePersonPopular