import React from "react";
import './index.css'
import SignIn from "../SignIn";
import { Auth } from "../../firebase/Firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const MiCuenta = () => {
    const [user, setUser] = useState({});
    onAuthStateChanged(Auth, (currentUser) => {
        setUser(currentUser);
    })
    const navigate = useNavigate()

    const logOut = async () => {
        await signOut(Auth)
            .then(() => {

                Swal.fire({
                    title: 'Vas a ser redirigido a ',
                    icon: 'info'
                }); 
                setTimeout(() => {
                    navigate('/Menu/SignIn')
                }, 3000)
            })
            return
    }

    return (
        <>
            <section className="anashe">
                <div className="miCuenta">

                    <h2>hola </h2>
                    <h1>'{user.email}'</h1>
                    <button onClick={logOut}> LogOut</button>
                </div>
            </section>
        </>
    )
}

export default MiCuenta