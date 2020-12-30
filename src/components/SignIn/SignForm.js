import {useState , useContext} from 'react' 
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import { Link , Switch, Route} from 'react-router-dom'
import AuthOptions from './AuthOptions'
import {Context} from '../../Context'


function SignForm() {

    const {toggleSignInForm, setToggleSignInForm} = useContext(Context)
    
    function handleToggleClick() {
        setToggleSignInForm(prevState => !prevState)
    }

    

    const signInTile = (
         <div className="signIn-container">

        <div className="signIn-toggle-container">
            {/* <span className="signIn-toggle-label" onClick={handleToggleClick}>{toggleSignInForm ? "Create Account" : "Sign In"}</span> */}
            <AuthOptions />
        </div>
          <Switch>  
        { toggleSignInForm ? 
        
           <SignInForm  />
         : 
            <SignUpForm />
        }
          </Switch>
        </div>
    )

    return {signInTile}
}

export default SignForm