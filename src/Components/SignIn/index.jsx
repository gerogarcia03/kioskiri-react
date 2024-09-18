import React, { useState, createContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db, Auth } from '../../firebase/Firebase';
import './index.css'
import PasswordIcon from '@mui/icons-material/Password';
import Swal from 'sweetalert2';

import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

const SignIn = () => {

    const [hayErrores, setHayErrores] = useState(false)
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const navigate = useNavigate()

    const [user, setUser] = useState({});
    onAuthStateChanged(Auth, (currentUser) => {
        setUser(currentUser);
    })

    //


    /////////////////////
    const handleInputChange = (ev, stateSetter) => {
        stateSetter(ev.target.value)
    }

    ////////////////////
    const logIn = async () => {

        try {
            await signInWithEmailAndPassword(
                Auth,
                loginEmail,
                loginPassword
            )
                .then(() => {
                    Swal.fire({
                        title: 'Felicitaciones!',
                        text: 'Ya iniciaste sesión en kioskiri',
                        icon: 'success',
                    });
                    setTimeout(() => {
                        navigate('/MiCuenta')
                    }, 3000)
                })

            console.log(user.email)
        } catch (error) {
            console.log(error)
        }
    }



    const logOut = async () => {
        await signOut(Auth)
    }




    return (
        <>
            <div className='form'>
                <form>
                    <h2>Inicia Sesion</h2>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>
                        <input type='email' placeholder='Email' required onChange={(ev) => { handleInputChange(ev, setLoginEmail) }} ></input>
                        {user?.email}
                    </div>
                    <div>
                        <PasswordIcon></PasswordIcon>
                        <input type='password' placeholder='Contraseña' required onChange={(ev) => { handleInputChange(ev, setLoginPassword) }} ></input>
                    </div>

                    {hayErrores && (<p style={{ color: "red", alignItems: 'end' }}>Faltan completar datos</p>)}

                    <button onClick={(ev) => {
                        logIn()
                        ev.preventDefault()
                    }} >Acceder</button>
                    <button onClick={logOut}>sign out</button>

                    <h5>Si no tenes cuenta registrate <Link to='/Menu/SignUp'>acá </Link></h5>
                </form>
            </div>
        </>
    )
}


export default SignIn