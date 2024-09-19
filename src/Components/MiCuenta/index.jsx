import React from "react";
import './index.css'
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

        try {

            console.log(user?.email)
            await signOut(Auth)
                .then(() => {
                    Swal.fire({
                        title: 'Te deslogeaste con éxito',
                        icon: 'info'
                    });
                    setTimeout(() => {
                        navigate('/')
                    }, 3000)
                })
        } catch (error) {
            console.log(error)

        }
    }

    return (
        <>
            <section className="anashe">
                <div className="miCuenta">

                    <h2>hola </h2>
                    <h1>{user?.email}</h1>

                    <button onClick={logOut}> LogOut</button>
                </div>
            </section>
        </>
    )
}

export default MiCuenta