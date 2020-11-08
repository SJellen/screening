import { useContext } from 'react'
import {Context} from '../Context'

function useSearchResultsPerson() {
    const {posterPath, setItemBoxOpen, setPersonId, fetchPersonDetails, setMediaType, searchResultsPerson}  = useContext(Context)


    function handleSearchPersonClick(e) {
        let selection = searchResultsPerson[e].id
        setMediaType('person')
        setPersonId(selection)
        fetchPersonDetails(selection)
        setItemBoxOpen(true)
        
    }

    const searchResultsPersonTile = searchResultsPerson.map((person, index) => 
    <div className="slider-card" key={person.id}> 
    <img  src={`${posterPath}${person.profile_path}`} alt="poster" onClick={() => handleSearchPersonClick(index)}/>
    <span className="slider-name">{person.name}</span>
   </div> 
    )

    return {searchResultsPersonTile}
}



export default useSearchResultsPerson