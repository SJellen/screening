import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function useMenuPopularPersonPage() {
    const {posterPath, handlePersonClick, menuPopularPersonPage1, menuPopularPersonPage2, menuPopularPersonPage3, menuPopularPersonPage4, menuPopularPersonPage5, menuPopularPersonPage6}  = useContext(Context)


    
    const menuPopularPersonTile1 = menuPopularPersonPage1.map((person, index) => 
        <div className="slider-card" key={person.id}> 
        <Link to={`/personPage/${person.id}`}><img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonClick(index, menuPopularPersonPage1)}/></Link>
        <span className="slider-name">{person.name}</span>
       </div> 
        )

    const menuPopularPersonTile2 = menuPopularPersonPage2.map((person, index) => 
        <div className="slider-card" key={person.id}> 
        <Link to={`/personPage/${person.id}`}><img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonClick(index, menuPopularPersonPage2)}/></Link>
        <span className="slider-name">{person.name}</span>
       </div> 
        )

    const menuPopularPersonTile3 = menuPopularPersonPage3.map((person, index) => 
        <div className="slider-card" key={person.id}> 
        <Link to={`/personPage/${person.id}`}><img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonClick(index, menuPopularPersonPage3)}/></Link>
        <span className="slider-name">{person.name}</span>
       </div> 
        )

    const menuPopularPersonTile4 = menuPopularPersonPage4.map((person, index) => 
        <div className="slider-card" key={person.id}> 
        <Link to={`/personPage/${person.id}`}><img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonClick(index, menuPopularPersonPage4)}/></Link>
        <span className="slider-name">{person.name}</span>
       </div> 
        )

    const menuPopularPersonTile5 = menuPopularPersonPage5.map((person, index) => 
        <div className="slider-card" key={person.id}> 
        <Link to={`/personPage/${person.id}`}><img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonClick(index, menuPopularPersonPage5)}/></Link>
        <span className="slider-name">{person.name}</span>
       </div> 
        )

    const menuPopularPersonTile6 = menuPopularPersonPage6.map((person, index) => 
        <div className="slider-card" key={person.id}> 
        <Link to={`/personPage/${person.id}`}><img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonClick(index, menuPopularPersonPage6)}/></Link>
        <span className="slider-name">{person.name}</span>
       </div> 
        )

        return {menuPopularPersonTile1, menuPopularPersonTile2, menuPopularPersonTile3, menuPopularPersonTile4, menuPopularPersonTile5, menuPopularPersonTile6}
}



export default useMenuPopularPersonPage