import React, {useContext} from 'react'
import {Context} from '../Context'
import '../style/Tv.css'


function Tv() {

    const {tvDetails}  = useContext(Context)

    return (
        <div>
            <h1>Tv</h1>
        </div>
    )
}


export default Tv