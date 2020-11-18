import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'

function usePersonPopular() {
    const {posterPath, popularPerson, setItemPageOpen,  setPersonId, fetchPersonDetails, setMediaType, fetchPersonCredits, fetchPersonImages}  = useContext(Context)


    function handlePersonTrendingClick(e) {
        let selection = popularPerson[e].id
        setMediaType('person')
        setPersonId(selection)
        fetchPersonDetails(selection)
        fetchPersonCredits(selection)
        fetchPersonImages(selection)
        setItemPageOpen(prevState => !prevState)
        window.scrollTo(0, 0)
    }
    
    const popularPersonTile = popularPerson.map((person, index) => 
        <div className="slider-card" key={person.id}> 
        <img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonTrendingClick(index)}/>
        <span className="slider-name">{person.name}</span>
       </div> 
        )

        return {popularPersonTile}
}



export default usePersonPopular