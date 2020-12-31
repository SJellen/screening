import react, { useContext, useState, useEffect } from 'react' 
import {Context} from '../../Context'
import Axios from 'axios'
import UserContext from '../../UserContext'
import { useHistory } from 'react-router-dom'


function SignInForm() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const { setUserData } = useContext(UserContext)

    const history = useHistory()

    const submit = async (e) => {
        e.preventDefault()
        const loginUser = { email, password }
        const loginRes = await Axios.post("http://localhost:5000/users/login", 
            loginUser
        )
        setUserData({
            token: loginRes.data.token,
            user: loginRes.data.user
        })
        localStorage.setItem("auth-token", loginRes.data.token)
        history.push("/")
    }

   




    return (
        <div className="signIn-form-container">
            <span className="signIn-title">Welcome Back</span>
            <form className="signIn-form" onSubmit={submit}>
                <div className="input-label-container">
                    <label className="input-label" htmlFor="signIn-email" >Email</label>
                                        <input
                                            className="form-input"
                                            id="signIn-email"
                                            placeholder="ILuvMovies@moviePhone.com" 
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"

                                        />

                </div>
                
                <div className="input-label-container">
                    <label className="input-label" htmlFor="signInn-password">Password</label>
                        <input 
                            className="form-input"
                            id="signInn-password"
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