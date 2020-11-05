import React, {useContext} from 'react'
import '../style/ItemPage.css'
import {Context} from '../Context'


function ItemPage() {

    const {itemPageOpen, movieDetails}  = useContext(Context)
    console.log(movieDetails)

    return (
        <div>
          { itemPageOpen ? 
        <div className="item-page-container">
            <h1></h1>

        </div> : <div></div>
        
        
        }
          
        </div>
        
        
    )
}

export default ItemPage