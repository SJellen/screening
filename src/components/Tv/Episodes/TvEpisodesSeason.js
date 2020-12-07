import React, {useContext, useState} from 'react'
import {Context} from '../../../Context'
import episodePlaceholder from '../../../assets/episodePlaceholder.jpg'
import blankSquare from '../../../assets/placeholder.jpg'
import {Link} from 'react-router-dom'

function TvEpisodesSeason() {
    const {tvSeasonArr, posterPath, dateSplitter,   handlePersonClick}  = useContext(Context)
    const {showEpisodeCast, setEpisodeCast} = useState(false)

    function handleEpisodeTileClick(e, arr) {
        let selection = arr[e]
        console.log(selection.crew, selection.guest_stars)
    }
    
    



    const tvSeasonEpisodeTile = tvSeasonArr && tvSeasonArr.map((show, index) => 
    
    <div key={show.id}>
        <div className="details-episode-card-season-container"  onClick={() => handleEpisodeTileClick(index, tvSeasonArr)}>
            <div className="details-episode-card-season" >
            <div className="details-episode-card-title">
                    <span>{show.name}</span>
                    <span><i className="im im-star"></i>{show.vote_average}</span>
                </div>
                <div className="details-episode-season-img-overview-container">
                <div className="details-episode-card-img-season-container">
                    <img  src={show.still_path !== null ? `${posterPath}${show.still_path}` : episodePlaceholder} alt="poster" className="details-episode-card-img-season" /> 
                </div>
                <div className="details-episode-card-overview-season-container">
                    <span>{show.overview}</span>
                </div> 
                </div>
                

                <div className="details-episode-card-stat-box">
                    <span>Season {show.season_number}</span>
                    <span>Episode {show.episode_number}</span>
                    <span>{show.air_date && dateSplitter(show.air_date)}</span>  
                </div>
            

            </div>
            </div>

            
            <div className="details-slider-container" style={{height: "auto", backgroundColor: "black", color: "white", display: "flex", overflow: "hidden"}}>
            { show.guest_stars.length > 0 ?
                <div>
                   <span className="details-slider-title">Guest Stars</span>
                            <div className="slider-container" style={{backgroundColor: "black"}}>
                            <div className="slider-sub-container" style={{backgroundColor: "black"}}>
                        { show.guest_stars && show.guest_stars.map((item, index) => 
                            
                        <div className="slider-card" key={item.credit_id}> 
                        <Link to={`/personPage/${item.id}`}>
                            <img  src={item.profile_path !== null ? `${posterPath}${item.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonClick(index, show.guest_stars)}/> 
                        </Link>
                    
                        <span className="slider-name">{item.name}</span>
                        <span className="slider-character">{item.job}</span>
                    </div>    
                    
                            )
                            }
                        </div>
                        </div> 
                </div> : ''
                



            }

            { show.crew.length > 0 ?

                <div>
                <span className="details-slider-title">Crew</span>
                        <div className="slider-container" style={{backgroundColor: "black"}}>
                        <div className="slider-sub-container" style={{backgroundColor: "black"}}>

                        { show.crew && show.crew.map((item, index) => 
                        <div className="slider-card" key={item.credit_id}> 
                        <Link to={`/personPage/${item.id}`}><img  src={item.profile_path !== null ? `${posterPath}${item.profile_path}` : blankSquare} alt="poster" onClick={() => handlePersonClick(index, show.crew)}/></Link>
                        <span className="slider-name">{item.name}</span>
                        <span className="slider-character">{item.job}</span>
                    </div> 
                        
                        
                        )


                        }
                        </div>
                        </div>

                </div> : ''
            }
           

       

        </div>
        
            
           


           

        



    </div>
    )



    return (
        <div>
             {tvSeasonEpisodeTile}
        </div>
    
    )
}

export default TvEpisodesSeason