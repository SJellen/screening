import {useState } from 'react' 
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'


function SignForm() {

    const [toggleSignInForm, setToggleSignInForm] = useState(true)
    
    function handleToggleClick() {
        setToggleSignInForm(prevState => !prevState)
    }

    const signInTile = (
         <div className="signIn-container">

        <div className="signIn-toggle-container">
            <span className="signIn-toggle-label" onClick={handleToggleClick}>{toggleSignInForm ? "Create Account" : "Sign In"}</span>
        </div>
            
        { toggleSignInForm ? 
            <SignInForm />
         : 
            <SignUpForm />
        }
          
        </div>
    )

    return {signInTile}
}

export default SignForm