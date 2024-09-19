import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PasswordIcon from '@mui/icons-material/Password';
import { checkEmail, registrarUsuario } from '../Helpers/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';


const SignUp = () => {

    const [hayErrores, setHayErrores] = useState(false)
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSign] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const navigate = useNavigate()

    const datosCliente = {
        nombre: nombre,
        email: email,
        password: password
    }

    const handleInputChange = (ev, stateSetter) => {
        stateSetter(ev.target.value)
    }




    return (
        <>
            {isSign ? (<div className='userRegistrado'>
                <h2>Felicitaciones! Ya estas registrado en Kioskiri. Para continuar con tu compra clickeá <Link to='/'> acá.</Link></h2>
            </div>) : (<div className='form'>
                <form id='form'>
                    <h2>Registrate</h2>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="transparent" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>
                        <input type='text' placeholder='Nombre' required onChange={(ev) => { handleInputChange(ev, setNombre) }}></input>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>
                        <input type='email' placeholder='Email' required onChange={(ev) => { handleInputChange(ev, setEmail) }} onBlur={(ev) => { handleInputChange(ev, checkEmail(email, setEmailError)) }} ></input>
                        {emailError && (<p style={{ color: 'red' }}> Formato incorrecto</p>)}
                    </div>
                    <div>
                        <PasswordIcon></PasswordIcon>
                        <input type='password' placeholder='Contraseña' required onChange={(ev) => { handleInputChange(ev, setPassword) }} ></input>
                    </div>
                    {hayErrores && (<p style={{ color: "red" }}>Faltan completar datos</p>)}

                    <button onClick={(ev) => {
                        registrarUsuario(datosCliente, setHayErrores, collection, createUserWithEmailAndPassword, addDoc, navigate)
                        ev.preventDefault()
                    }} >Registrarme</button>
                    <h5>Si ya tenes cuenta ingresá <Link to='/Menu/SignIn'>acá</Link></h5>
                </form>
            </div>)}
        </>
    )
}


export default SignUp