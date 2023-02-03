import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../Firebase/init';
import { NavLink, useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    return(
        <>
            <main style={{textAlign: "center"}}>
                <section style={{width: "500px", margin: "0 auto"}}>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <div style={{backgroundColor: "white", padding: "20px", borderRadius: "10px"}}>
                        <h1> Connexion </h1>

                        <form style={{textAlign: "left"}}>
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    style={{width: "100%", padding: "10px", margin: "10px 0"}}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                    style={{width: "100%", padding: "10px", margin: "10px 0"}}
                                />
                            </div>

                            <div>
                                <button
                                    onClick={onLogin}
                                    style={{width: "100%", backgroundColor: "#5cb85c", color: "white", padding: "10px", borderRadius: "5px", cursor: "pointer", marginTop: "20px"}}
                                >
                                    Login
                                </button>
                            </div>
                        </form>

                        <p className="text-sm text-white text-center" style={{marginTop: "20px"}}>
                           Pas de compte ?{' '}
                            <NavLink to="/auth">
                                Sign up
                            </NavLink>
                        </p>

                    </div>
                </section>
            </main>
        </>

    )
}
