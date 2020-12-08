import React, {useContext} from 'react'
import {Context} from '../../../Context'
import {Link} from 'react-router-dom'


function TvEpisodesMain() {

    const {tvDetails, handleSeasonClick, tvSeason, setTvSeason}  = useContext(Context)


    const tvEpisodesTile =  tvDetails.seasons && tvDetails.seasons.map((show) => 
        <div className="detail-season-number-box" key={show.id}>
           <Link to={`/tvPage/${tvDetails.id}/${tvSeason}`} style={{ textDecoration: 'none', color: "white"  }}>
               <span onClick={(e) =>   handleSeasonClick(show.season_number)}
                     onMouseDown={(e) => setTvSeason(show.season_number)}
                     className="detail-season-number"
                     >{show.season_number === 0 ? "Specials" : show.season_number}
                </span>
           </Link> 
        </div>
    
    )



    return {tvEpisodesTile}

}

export default TvEpisodesMain