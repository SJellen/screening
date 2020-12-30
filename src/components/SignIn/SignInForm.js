import react, { useContext, useState, useEffect } from 'react' 
import {Context} from '../../Context'


function SignInForm() {

    const {username, setUserName, password, setPassword, email, setEmail, user, setUser}=  useContext(Context)

   

     function onChangeEmail(e) {
        setEmail(e.target.value)
    }

    function onChangePassword(e) {
        setPassword(e.target.value)
    }



    return (
        <div className="signIn-form-container">
            <span className="signIn-title">Welcome Back</span>
            <form className="signIn-form">
                <div className="input-label-container">
                    <label className="input-label">Email</label>
                                        <input
                                            className="form-input"
                                            placeholder="ILuvMovies@moviePhone.com" 
                                            onChange={onChangeEmail}

                                        />

                </div>
                
                <div className="input-label-container">
                    <label className="input-label">Password</label>
                        <input 
                            className="form-input"
                            placeholder="Not1234"
                            onChange={onChangePassword}

                        />
                
                 </div>
                 
                <input type="submit" value="Sign In" className="submit-form" />
            </form>
            </div>
    )
    
    







}

export default SignInForm