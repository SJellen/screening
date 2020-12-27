import React, {useContext} from 'react'
import {Context} from '../Context'
import useSignIn from '../logic/useSignIn'
import {Link} from 'react-router-dom'
import '../style/SignIn.css'


function SignIn() {
    const {signInMenu} = useContext(Context)
    const {signInTile} = useSignIn()
    
   
    return (
        <div>
            { signInMenu ? 
             <div className="watchlist-page-container">
            <Link to="/" style={{ textDecoration: 'none', color: "white"  }}>
                <i className="im im-x-mark item-page-close" ></i> 
            </Link>
            <span className="signIn-page-title">Sign in to create a watch list</span>
           {signInTile}
        </div> : ''

        }

       
        </div>
        
       
    )
}


export default SignIn