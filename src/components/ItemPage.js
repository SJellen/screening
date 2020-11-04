import React, {useContext} from 'react'
import '../style/ItemPage.css'
import {Context} from '../Context'


function ItemPage() {

    const {itemPageOpen}  = useContext(Context)

    return (
        <div>
          { itemPageOpen ? 
        <div className="item-page-container">
            <h1>page</h1>

        </div> : <div></div>
        
        
        }
          
        </div>
        
        
    )
}

export default ItemPage