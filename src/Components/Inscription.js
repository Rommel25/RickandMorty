import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../Firebase/init';

// export const SignupPage = () => {
//     const navigate = useNavigate();
//
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('');
//
//     const onSubmit = async (e) => {
//         e.preventDefault()
//
//         await createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // Signed in
//                 const user = userCredential.user;
//                 console.log(user);
//                 navigate("/login")
//                 // ...
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.log(errorCode, errorMessage);
//                 // ..
//             });
//
//
//     }

// export const SignupPage = () => {
//     const navigate = useNavigate();
//
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//
//     const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     const passwordRegex = /^.{8,}$/;
//
//     const onSubmit = async (e) => {
//         e.preventDefault();
//
//         if (!emailRegex.test(email)) {
//             console.log("L'email n'est pas valide");
//             return;
//         }
//
//         if (!passwordRegex.test(password)) {
//             console.log("Le mot de passe doit contenir au moins 8 caractères");
//             return;
//         }
//
//         await createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 console.log(user);
//                 navigate("/auth/login");
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.log(errorCode, errorMessage);
//             });
//     };
//
//     return (
//         <main>
//         <section style={{padding: '50px', borderRadius: '10px'}}>
//             <div style={{textAlign: 'center'}}>
//                 <h1 style={{fontSize: '2rem'}}> FocusApp </h1>
//                 <form style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
//                     <div style={{margin: '10px'}}>
//                         <label htmlFor="email-address">
//                             Email address
//                         </label>
//                         <input
//                             type="email"
//                             label="Email address"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                             placeholder="Email address"
//                             style={{width: '100%', padding: '10px', borderRadius: '5px', margin: '10px 0'}}
//                         />
//                     </div>
//
//                     <div style={{margin: '10px'}}>
//                         <label htmlFor="password">
//                             Password
//                         </label>
//                         <input
//                             type="password"
//                             label="Create password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             placeholder="Password"
//                             style={{width: '100%', padding: '10px', borderRadius: '5px', margin: '10px 0'}}
//                         />
//                     </div>
//
//                     <button
//                         type="submit"
//                         onClick={onSubmit}
//                         style={{width: '100%', padding: '10px', borderRadius: '5px', margin: '10px 0', background: 'green', color: 'white', cursor: 'pointer'}}
//                     >
//                         Sign up
//                     </button>
//
//                 </form>
//
//                 <p style={{margin: '10px'}}>
//                     Already have an account?{' '}
//                     <NavLink to="auth/login" style={{color: 'blue'}}>
//                         Sign in
//                     </NavLink>
//                 </p>
//             </div>
//         </section>
// </main>
//
// )
// }
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
        <main>
            <section>
                <div>
                    <div>
                        <h1> FocusApp </h1>
                        <form>
                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    required
                                    placeholder="Password"
                                />
                            </div>

                            <button type="submit" onClick={onSubmit}>
                                Sign up
                            </button>
                        </form>

                        {error && (
                            <div>
                                <p>Error: {error}</p>
                            </div>
                        )}

                        <p>
                            Already have an account?{' '}
                            <NavLink to="/login">
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

