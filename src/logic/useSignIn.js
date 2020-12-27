import react, { useContext, useState } from 'react' 
import {Context} from '../Context'


function useSignIn() {

    const {username, setUserName, password, setPassword, email, setEmail}=  useContext(Context)
    const [toggleSignInForm, setToggleSignInForm] = useState(true)

    function onChangeUsername(e) {
        setUserName(e.target.value)
    }

    function onChangePassword(e) {
        setPassword(e.target.value)
    }

    function onChangeEmail(e) {
        setEmail(e.target.value)
    }
    function handleToggleClick() {
        setToggleSignInForm(prevState => !prevState)
    }


    const signInTile = (
         <div className="signIn-container">

        <div className="signIn-toggle-container">
            <span className="signIn-toggle-label" onClick={handleToggleClick}>{toggleSignInForm ? "Create account" : "Sign In"}</span>
        </div>

            
        { toggleSignInForm ? 
        <div className="signIn-form-container">
            <span className="signIn-title">Welcome Back</span>
            <form className="signIn-form">
                <div className="input-label-container">
                    <label className="input-label">Username</label>
                                        <input
                                            className="form-input" 


                                        />

                </div>
                
                <div className="input-label-container">
                    <label className="input-label">Password</label>
                        <input 
                            className="form-input"


                        />
                
                 </div>
                
            </form>

        </div> : 
        <div className="signUp-form-container">
            <span className="signIn-title">Create an account</span>
            <form className="signUp-form">

            <div className="input-label-container">
                <label className="input-label">Email</label>
                                    <input 
                                        className="form-input"


                                    />

            </div>
                

            <div className="input-label-container">
                <label className="input-label">Username</label>
                        <input 
                            className="form-input"


                        />
            
             </div>
                

            <div className="input-label-container">
                <label className="input-label">Password</label>
                        <input 
                            className="form-input"


                        />
            
             </div>
                

            </form>
        </div>


        }
         


      
            
        </div>
    )

    return {signInTile}
}

export default useSignIn