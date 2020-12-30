import react, { useContext, useState, useEffect } from 'react' 
import {Context} from '../../Context'


function SignInForm() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

   




    return (
        <div className="signIn-form-container">
            <span className="signIn-title">Welcome Back</span>
            <form className="signIn-form">
                <div className="input-label-container">
                    <label className="input-label" htmlFor="signIn-email" >Email</label>
                                        <input
                                            className="form-input"
                                            id="sign-in-email"
                                            placeholder="ILuvMovies@moviePhone.com" 
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"

                                        />

                </div>
                
                <div className="input-label-container">
                    <label className="input-label" htmlFor="sign-in-password">Password</label>
                        <input 
                            className="form-input"
                            id="sign-in-password"
                            placeholder="Not1234"
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                        />
                
                 </div>
                 
                <input type="submit" value="Sign In" className="submit-form" />
            </form>
            </div>
    )
    
    







}

export default SignInForm