import { db, Auth } from '../../../firebase/Firebase';
import Swal from 'sweetalert2';
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

///////////////////////


//
const checkEmail = (email, setEmailError) => {

    if (emailRegex.test(email)) {
        setEmailError(false)
    } else {
        setEmailError(true)
    }

}


//
const registrarUsuario = async ( datosCliente, setHayErrores, collection, addDoc, navigate) => {
    const { nombre, email, password } = datosCliente

    if (nombre === '' || email === '' || password === '') {
        setHayErrores(true)
        return
    } else {
        try {

            const userCollection = await collection(db, 'usuarios');
            await createUserWithEmailAndPassword(Auth, email, password)
            addDoc(userCollection, datosCliente)
                .then(() => {
                    Swal.fire({
                        title: 'Ya estás registrado en Kioskiri!',
                        icon: 'success',
                    });
                    setTimeout(() => {
                        navigate('/MiCuenta')
                    }, 3000)
                })
        } catch (error) {
            if (FirebaseError) {
                Swal.fire({
                    title: 'Email en uso',
                    text: 'Por favor, ingresa un email válido',
                    icon: 'error'
                })
            }


        }
    }
}




////////////////////
const logIn = async (loginEmail, loginPassword, setHayErrores, navigate, user) => {

    if (loginEmail === '' || loginPassword === '') {
        setHayErrores(true)

    } else {

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

            console.log(user?.email)
        } catch (error) {
            console.log(error)
            if (FirebaseError) {
                Swal.fire({
                    title: 'El email no coicide',
                    text: 'Por favor, ingresa un email válido',
                    icon: 'error'
                })
            }
        }
    }
}


const logOut = async () => {
    try {
        await signOut(Auth)

    } catch (error) {
        console.log(error)

    }
}

export { logIn, logOut, checkEmail, registrarUsuario }