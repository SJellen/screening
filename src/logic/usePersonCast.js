import React, {useContext} from 'react'
import {Context} from '../Context'

function usePersonCast() {

    const {personDetails, posterPathLarge, dateSplitter, personCredits, getYear}  = useContext(Context)

    const {crew, cast} = personCredits
    
    let castTvArr = [], castMovieArr = [], otherArr = []
    if (cast !== undefined) {
       for (let i =0; i < cast.length; i++) {
        if (cast[i].media_type === "movie") {
            castMovieArr.push(cast[i])
        } else if (cast[i].media_type === "tv") {
            castTvArr.push(cast[i])
        } else {
            otherArr.push(cast[i])
        }
    } 
    }

    console.log(cast)


    let sortedCast = []
    // if (cast !== undefined) {
    //     for (let i = 0; i < cast.length; i++) {
    //         console.log(cast[i].media_type)
    //         if (cast[i].media_type === "tv" && ) {
    //             cast[i].first_air_date = parseInt(getYear(castTvArr[i].first_air_date))
                
                
    //         } 
    //     }


    // }

    // let newTvArr = [...castTvArr]
    // if (castTvArr !== undefined) {
    //     for (let i = 0; i < castTvArr.length; i++) {
    //         for (let j = 0; j < newTvArr.length; j++)
    //             // console.log(parseInt((castTvArr[i].first_air_date).split("-")))
    //             newTvArr[i].concat(parseInt((castTvArr[i].first_air_date).split("-")))
                
                 
    //         }


    // }

    // let newArr = castTvArr.sort((a,b) => {
        
        
    //     if (castTvArr[a].first_air_date !== undefined || castTvArr[b].first_air_date !== undefined) {
    //      let c = parseInt(getYear(castTvArr[a].first_air_date))
    //      let d = parseInt(getYear(castTvArr[b].first_air_date))
    //        return c-d 
    //     }
        
    // })
    
    

    



    
        
        // for (let i =0; i < castTvArr.length; i++) {
        //     let parseNum = parseInt(getYear(castTvArr[i].first_air_date))
            
           
        // }

        
       
    // let creditCount = cast.length !== undefined ? cast.length : 0

    
    
    
  

    
       
    
       
    
    return {}
}

export default usePersonCast