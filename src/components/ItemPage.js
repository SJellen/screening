import React, {useContext} from 'react'
import '../style/ItemPage.css'
import {Context} from '../Context'


function ItemPage() {

    const {itemPageOpen, movieDetails, tvDetails, personDetails, setItemBoxOpen}  = useContext(Context)
    console.log(movieDetails, tvDetails, personDetails)

    function handleX() {
        setItemBoxOpen(prevState => !prevState)
    }

    return (
        <div>
          { itemPageOpen ? 
        <div className="item-page-container">
            <h1 onClick={handleX}>X</h1>

            

        </div> : <div></div>
        
        
        }
          
        </div>
        
        
    )
}

export default ItemPage