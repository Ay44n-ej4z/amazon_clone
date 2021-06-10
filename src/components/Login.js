import React, { useState } from 'react'
import {Link, useHistory} from "react-router-dom"
import { auth } from '../firebase';
import "./Login.css"

function Login() {
    const history =  useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const siginIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then (auth => {
                history.push("/")
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault(); 

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=> {
                console.log(auth);
                if(auth){
                    history.push("/")
                }
            })
            .catch(error => alert(error.message))
        }       

    return (
        <div className = "login">
            <Link to = '/'>
            <img 
            className = "login_logo"
            src = "http://www.pngall.com/wp-content/uploads/2016/03/Amazon-Logo-PNG.png" />
            </Link>

            <div className= "login_container">
                <h1 className = 'text_h1'>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type = "text" value = {email} onChange = {e => setEmail(e.target.value) } />
                    <h5>password</h5>
                    <input type = "password" value = {password} onChange = {e => setPassword(e.target.value) } />
                    <button type = "submit" className = "signin"
                    onClick = {siginIn}
                    >Sign In</button>
                </form>
                <p>By Signing-in you agree to share to the Amazon Clone
                    condition of Use & Sale. Please 
                    see our Privacy Notice, our Cookies Notice 
                    and our Interest-Based Ads Notice
                </p>
                <button onClick = {register} className = "create_account">Create Account</button>
            </div>

        </div>
    )
}

export default Login
