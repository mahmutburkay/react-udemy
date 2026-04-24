import React, { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast } from 'react-toastify';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from "firebase/auth";



const provider = new GoogleAuthProvider(); // google için

provider.setCustomParameters({
    prompt: "select_account"  // google hesabı seçmesi için
});

function Auth() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    //! ---------------------------- Yeni Kayıt - Register ---------------------------------

    const register = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;

            if (user) {
                toast.success("Kullanıcı oluşturuldu")
                setEmail('');
                setPassword('');
            }
        } catch (error) {
            toast.error(error.message)
        }
    }



    //! ---------------------------- Giriş - Login -------------------------------------------

    const login = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const user = response.user;

            if (user) {
                toast.success("Giriş başarılı");
                navigate("/");   // Home.jsx yolu
            }
        } catch (error) {
            toast.error("Giriş Yapılamadı " + error.message);
        }
    };



    //! --------------------------- Google ile Giriş - Login -----------------------------

    const LoginWithGoogle = async () => {

        try {
            const response = await signInWithPopup(auth, provider);
            const user = response.user;

            if (user) {
                toast.success("Giriş başarılı");
                navigate("/");   // Home.jsx yolu
            }
        }
        catch (error) {
            toast.error(error.message);
        }
    }



    return (
        <div className='auth'>
            <h3 className='auth-header'> Giriş yap / Kaydol</h3>

            <div className='input-div'>
                <input className='input' type="text"
                    value={email} onChange={(e) => setEmail(e.target.value)} placeholder='e-mail adresinizi  giriniz' />

                <input className='input' type="password"
                    value={password} onChange={(e) => setPassword(e.target.value)} placeholder='şifrenizi giriniz' />
            </div>

            <div>
                <button onClick={LoginWithGoogle} className='google-button'>
                    <FaGoogle style={{ marginRight: "5px" }} />
                    Google ile giriş
                </button>
                <button onClick={login} className='login-button'>Giriş Yap </button>
                <button onClick={register} className='register-button'>Kaydol </button>
            </div>
        </div>
    )
}

export default Auth


