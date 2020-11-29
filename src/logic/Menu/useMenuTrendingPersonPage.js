import { useContext } from 'react'
import {Context} from '../../Context'
import blankSquare from '../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function useMenuTrendingPersonPage() {
    const {posterPath, handlePersonClick, menuTrendingPersonPage1, menuTrendingPersonPage2, menuTrendingPersonPage3, menuTrendingPersonPage4, menuTrendingPersonPage5, menuTrendingPersonPage6}  = useContext(Context)

    
    const menuTrendingPersonTile1 = menuTrendingPersonPage1.map((person, index) => 
        <div className="slider-card" key={person.id}> 
        <Link to={`/personPage/${person.id}`}><img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonClick(index, menuTrendingPersonPage1)}/></Link>
        <span className="slider-name">{person.name}</span>
       </div> 
        )

    const menuTrendingPersonTile2 = menuTrendingPersonPage2.map((person, index) => 
        <div className="slider-card" key={person.id}> 
        <Link to={`/personPage/${person.id}`}><img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonClick(index, menuTrendingPersonPage2)}/></Link>
        <span className="slider-name">{person.name}</span>
       </div> 
        )

    const menuTrendingPersonTile3 = menuTrendingPersonPage3.map((person, index) => 
        <div className="slider-card" key={person.id}> 
        <Link to={`/personPage/${person.id}`}><img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonClick(index, menuTrendingPersonPage3)}/></Link>
        <span className="slider-name">{person.name}</span>
       </div> 
        )

    const menuTrendingPersonTile4 = menuTrendingPersonPage4.map((person, index) => 
        <div className="slider-card" key={person.id}> 
        <Link to={`/personPage/${person.id}`}><img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonClick(index, menuTrendingPersonPage4)}/></Link>
        <span className="slider-name">{person.name}</span>
       </div> 
        )

    const menuTrendingPersonTile5 = menuTrendingPersonPage5.map((person, index) => 
        <div className="slider-card" key={person.id}> 
        <Link to={`/personPage/${person.id}`}><img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonClick(index, menuTrendingPersonPage5)}/></Link>
        <span className="slider-name">{person.name}</span>
       </div> 
        )

    const menuTrendingPersonTile6 = menuTrendingPersonPage6.map((person, index) => 
        <div className="slider-card" key={person.id}> 
        <Link to={`/personPage/${person.id}`}><img  src={person.profile_path !== null ? `${posterPath}${person.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonClick(index, menuTrendingPersonPage6)}/></Link>
        <span className="slider-name">{person.name}</span>
       </div> 
        )

        return {menuTrendingPersonTile1, menuTrendingPersonTile2, menuTrendingPersonTile3, menuTrendingPersonTile4, menuTrendingPersonTile5, menuTrendingPersonTile6}
}



export default useMenuTrendingPersonPage