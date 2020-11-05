import React, {useContext} from 'react'
import {Context} from '../Context'
import '../style/Person.css'


function Person() {

    const {personDetails}  = useContext(Context)

    return (
        <div>
            <h1>Person</h1>
        </div>
    )
}


export default Person