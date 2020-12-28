import react, { useContext, useState, useEffect} from 'react' 
import {Context} from '../../Context'


function SignUpForm() {

    const {username, setUserName, password, setPassword, email, setEmail}=  useContext(Context)

    function onChangeUsername(e) {
        setUserName(e.target.value)
        console.log(username)
    }

    function onChangePassword(e) {
        setPassword(e.target.value)
    }

    function onChangeEmail(e) {
        setEmail(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()
        const user = {
            username: username,
            password: password,
            email: email
        }
        
        
    }
    
    

    return (
        <div className="signUp-form-container">
        <span className="signIn-title">Create an Account</span>
        <form className="signUp-form">

        <div className="input-label-container">
            <label className="input-label">Email</label>
                                <input 
                                    className="form-input"
                                    placeholder="ILuvMovies@email.com"
                                    onChange={onChangeEmail}

                                />

        </div>
            

        <div className="input-label-container">
            <label className="input-label">Username</label>
                    <input 
                        className="form-input"
                        placeholder="ILuvMovies" 
                        onChange={onChangeUsername}

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
            
         <input type="submit" value="Submit" className="submit-form" />
        </form>
    </div>
    )
    
    







}

export default SignUpForm