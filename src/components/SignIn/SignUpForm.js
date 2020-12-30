import react, { useContext, useState, useEffect} from 'react' 
import {Context} from '../../Context'


function SignUpForm() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [passwordCheck, setPasswordCheck] = useState()
    const [displayName, setDisplayName] = useState()

    function onSubmit(e) {
        e.preventDefault()
        // setUser({
        //     username: username,
        //     password: password,
        //     email: email
        // })
       

       
        
        
    }
    
    

    return (
        <div className="signUp-form-container">
        <span className="signIn-title">Create an Account</span>
        <form className="signUp-form">

        <div className="input-label-container">
            <label className="input-label" htmlFor="register-email">Email</label>
                                <input 
                                    className="form-input"
                                    id="register-email"
                                    placeholder="ILuvMovies@email.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                />

        </div>
            

        <div className="input-label-container">
            <label className="input-label" htmlFor="register-displayName" >Display Name</label>
                    <input 
                        className="form-input"
                        id="register-displayName"
                        placeholder="ILuvMovies" 
                        onChange={(e) => setDisplayName(e.target.value)}
                        type="text"

                    />
        
         </div>
            

        <div className="input-label-container">
            <label className="input-label" htmlFor="register-password">Password</label>
                    <input 
                        className="form-input"
                        id="register-password"
                        placeholder="Not1234"
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"


                    />

                    <input 
                        className="form-input"
                        type="password"
                        placeholder="Verify Password"
                        onChange={(e) => setPasswordCheck(e.target.value)}


                    />
        
         </div>

        
            
         <input type="submit" value="Register" className="submit-form" onSubmit={onSubmit}/>
        </form>
    </div>
    )
    
    







}

export default SignUpForm