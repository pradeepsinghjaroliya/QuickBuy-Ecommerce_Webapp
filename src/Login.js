import React, { useState } from 'react'
import './Login.css';
import {Link,useHistory} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase.js";
function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn= e=> {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                history.push('/')
            })
            .catch(error=> alert(error.message))
    }
    const register= e=> {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login" >
            <Link to='/' style={{ textDecoration: 'none' }}>
            <div id="company_cont">
                <img className="login_logo"
                src="https://raw.githubusercontent.com/pradeepsinghjaroliya/image/master/company_logo.png" 
                alt="" />
                <span id="company_name1">PSJ </span>
                <span id="company_name2">QuickBUY</span>
            </div>
            </Link>
    
            <div className="login_container">
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input type='password' value={password}
                    onChange= {e => setPassword(e.target.value)}
                    />

                    <button className="login_signInButton"
                            type='submit'
                            onClick={signIn}
                    >Sign In</button>
                </form>

                <button className="login_registerButton"
                        onClick={register}
                >Create your new Account</button>
            </div>
        </div>

    )
}

export default Login
