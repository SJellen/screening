import React, {useContext} from 'react'
import {Context} from '../Context'

function usePersonCredits() {

    const {personDetails, posterPathLarge, dateSplitter, personCredits}  = useContext(Context)

    const {crew, cast} = personCredits
    
    console.log(cast, crew)

    const personCredit = (
          <div>
            <h1>Credits</h1>
        </div>
    )
       
    
       
    
    return {personCredit}
}

export default usePersonCredits