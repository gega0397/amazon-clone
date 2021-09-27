import { Link, useHistory } from "react-router-dom";
import React, {useState} from 'react'
import "./Signin.css"
import { useStateValue } from './stateprovider'
import { auth } from './firebase.js'

function Signin() {


    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signin = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth => {
                console.log(auth)
                history.push('/')
            })
            .catch(error => alert(error.message))
        //firebase login
    }

    const register = e => {
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                console.log("created",auth)
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

    }

    return (
        <div className="login">
            <Link to="/">
            <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt = 'Gimage'
            className="login__logo"
            />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={
                        e => setEmail(e.target.value)
                    } />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={
                        e => setPassword(e.target.value)
                    }/>
                    <button className='login__signin' type='submit' onClick={signin}>Sign In</button>
                </form>

            <p>
                Sign in at your own risk
            </p>
                <button onClick={register} className='login__signup'>Sign up</button>            
            </div>
        </div>
    )
}





export default Signin
