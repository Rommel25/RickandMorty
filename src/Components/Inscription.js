import React, {useEffect, useRef, useState} from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Firebase/init";
import { redirect } from 'react-router-dom';
import {Link} from "react-router-dom";

export function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async() => {
        //event.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
        }catch (error){
            console.log(error.message)
        }
        /**auth
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                redirect('/');
            })
            .catch((err) => {
                setError(err.message);
            });**/

    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Inscription</h1>
            <input
                type="email"
                placeholder="Adresse e-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>S'inscrire</button>
            {error && <p>{error}</p>}
        </form>
    );
}


