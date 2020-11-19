import React, {useContext, useState} from 'react'
import {Context} from '../../Context'
import '../../style/Item.css'
import PersonCredits from './PersonCredits'
import PersonImages from './PersonImages'


function Person() {

    const {personDetails, posterPathLarge, dateSplitter, truncateBio}  = useContext(Context)
    const {personCredit} = PersonCredits()
    const {personImageTile} = PersonImages()
    const [bioShow, setBioShow] = useState(true)

    function handleTruncate() {
        setBioShow(prevState => !prevState)
        window.scrollTo(0, 0)
    }

    const truncated = <div>{truncateBio(personDetails.biography)} <i className="im im-angle-down" onClick={handleTruncate}></i></div>
    const nonTruncated = <div>{personDetails.biography} <i className="im im-angle-up" onClick={handleTruncate}></i></div>

    
    
   

    return (
        <div>
        <div className="details-container">

        <div className="detail-top-container">
        <div className="poster-container">
        { personDetails.profile_path && 
        <img src={`${posterPathLarge}${personDetails.profile_path}`} alt="movie poster" className="details-poster" />
        }
           
        </div>
        <div className="detail-word-box">
            <div className="details-top-word-box">
                <span className="details-title">{personDetails.name}</span>    
            </div>
            
            <div className="details-mid-word-box">
                { personDetails.birthday && <span className="details-birth">Born {dateSplitter(personDetails.birthday)}</span>}
                
                { personDetails.deathday && <span className="details-death">Died {dateSplitter(personDetails.deathday)}</span>}
                 
            </div>
            <div className="details-midbottom-word-box">
               
               { personDetails.place_of_birth && <span className="details-birth-place">{`Place of birth: ${personDetails.place_of_birth}`}</span>}
               
            </div>
            <div className="details-tagline">
                <h3>{personDetails.tagline}</h3>
            </div>
           
            { personDetails.biography && <div className="details-overview"><span className="details-overview-truncated">{personDetails.biography.length < 400 ? personDetails.biography : bioShow ? truncated : nonTruncated}</span></div> }
        </div>


        </div>
       

        </div>
        <div className="details-images-container">
            {personImageTile}
        </div>
        <div className="details-credit-container">
            {personCredit}
        </div>
        </div>

    )
}


export default Person