import { useContext } from 'react'
import {Context} from '../Context'

function usePersonTrending() {
    const {personTrending, posterPath}  = useContext(Context)
 
    const personTrendingTile = personTrending.map(person => 
        
        <div className="trending-card" key={person.id}> 
        <img  src={`${posterPath}${person.profile_path}`} alt="poster"/>
        <span className="trending-name">{person.name}</span>
        </div>
        )

        return {personTrendingTile}
}


export default usePersonTrending