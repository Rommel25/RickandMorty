import React, {useState} from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../Firebase/init';


export const SignupPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            setError('Email address is not valid');
            return;
        }

        if (password.length < 8) {
            setError('Password must be at least 8 characters');
            return;
        }

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/auth/login");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <main style={{textAlign: "center"}}>
            <section style={{width: "500px", margin: "0 auto"}}>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/>

                <div style={{backgroundColor: "white", padding: "20px", borderRadius: "10px"}}>
                    <div>
                        <h1> Inscription </h1>
                        <form style={{textAlign: "left"}}>
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{width: "100%", padding: "10px", margin: "10px 0"}}
                                    required
                                    placeholder="Email address"
                                />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={{width: "100%", padding: "10px", margin: "10px 0"}}
                                    required
                                    placeholder="Password"
                                />
                            </div>

                            <button type="submit" onClick={onSubmit} style={{width: "100%", backgroundColor: "#5cb85c", color: "white", padding: "10px", borderRadius: "5px", cursor: "pointer", marginTop: "20px"}}>
                                Sign up
                            </button>
                        </form>

                        {error && (
                            <div>
                                <p>Error: {error}</p>
                            </div>
                        )}

                        <p>
                            Déja un compte?{' '}
                            <NavLink to="/auth/login">
                                Sign in
                            </NavLink>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SignupPage;

