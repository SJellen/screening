import React, {useContext} from 'react'
import {Context} from '../Context'
import '../style/Item.css'
import PersonCredits from './PersonCredits'
import PersonImages from './PersonImages'


function Person() {

    const {personDetails, posterPathLarge, dateSplitter}  = useContext(Context)
    const {personCredit} = PersonCredits()
    const {personImageTile} = PersonImages()
    
   

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
               
                <span className="details-birth-place">{`Place of birth: ${personDetails.place_of_birth}`}</span>
               
            </div>
            <div className="details-tagline">
                <h3>{personDetails.tagline}</h3>
            </div>
            
            <p className="details-overview">{personDetails.biography}</p>
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