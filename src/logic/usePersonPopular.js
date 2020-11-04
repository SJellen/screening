import { useContext } from 'react'
import {Context} from '../Context'

function usePersonPopular() {
    const {posterPath, popularPerson}  = useContext(Context)


    function handlePersonTrendingClick(e) {
        let selection = popularPerson[e].id
        console.log(selection)
    }
    
    const popularPersonTile = popularPerson.map((person, index) => 
        <div className="slider-card" key={person.id}> 
        <img  src={`${posterPath}${person.profile_path}`} alt="poster" onClick={() => handlePersonTrendingClick(index)}/>
        <span className="slider-name">{person.name}</span>
       </div> 
        )

        return {popularPersonTile}
}



export default usePersonPopular