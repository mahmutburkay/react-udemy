import React from 'react'
import "../css/LoginPage.css"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { registerPageSchema } from '../schemas/RegisterPageSchema';
import type { UserType } from '../types/Types';
import { toast } from 'react-toastify';
import LoginPageService from '../services/LoginPageService';
import { useDispatch } from 'react-redux';
import { setCurrentUser, setLoading } from '../redux/appSlice';
import { useNavigate } from 'react-router-dom';


interface CheckUserType {
    result: boolean,
    currentUser: UserType | null
}

function LoginPage() {


    const dispatch = useDispatch();
    const navigate = useNavigate();



    const checkUser = (userList: UserType[], username: string, password: string): CheckUserType => {
        const response: CheckUserType = { result: false, currentUser: null }

        userList.forEach((user: UserType) => {

            if (user.username == username && user.password == password) {
                response.result = true;
                response.currentUser = user;
            }
        })

        return response;
    }




    const submit = async (values: any) => {

        try {
            dispatch(setLoading(true));

            const users = await LoginPageService.login(); // isteği attık, bize UserType[] dizisini getirdi 
            const result = checkUser(users, values.username, values.password); // yukarda giriş doğrulaması yaptık.

            if (!result.result || !result.currentUser) {  // kullanıcı bulunamadıysa *ad veya şifre yanlışsa*
                toast.error("Kullanıcı adı veya şifre hatalı");
                return;
            }
            // ad-şifre doğruysa 
            dispatch(setCurrentUser(result.currentUser)); // redux a user ı kaydettik 
            localStorage.setItem("currentUser", JSON.stringify(result.currentUser)); // localstorage a kaydettik
            toast.success("Giriş başarılı");
            clear();
            navigate("/");

        } catch {
            toast.error("Giriş başarısız");
        } finally {
            dispatch(setLoading(false));
        }
    };


    //todo *** ENES HOCANIN YAZDIĞI SUBMİT  ***** 
    // 
    // const submit = async (values: any, actions: any) => {
    //     try {
    //         dispatch(setLoading(true))
    //         const response: UserType[] = await LoginPageService.login();  //* isteği attık bize veriyi getirdi

    //         if (response) {
    //             const checkUserResponse: CheckUserType = checkUser(response, values.username, values.password) // yukarda giriş doğrulaması yaptık.
    //             if (checkUserResponse.result && checkUserResponse.currentUser) {
    //                 dispatch(setCurrentUser(checkUserResponse.currentUser))
    //                 localStorage.setItem("current User", JSON.stringify(checkUserResponse.currentUser))
    //                 toast.success("Giriş Başarılı")
    //                 clear();
    //                 navigate("/")
    //             } else {
    //                 toast.error("Kullanıcı Adı veya Şifre hatalı");
    //             }
    //         }



    //     } catch (error) {
    //         toast.error("Giriş Başarısız");
    //     }
    //     finally {
    //         dispatch(setLoading(false));
    //     }
    // }



    //* useFormik i entegre ediyoruz. 
    const { values, errors, handleChange, handleSubmit, resetForm } = useFormik({
        initialValues: {
            username: '',
            password: '',
        },

        onSubmit: submit, // butona basılınca çalışacak. (submit = kendi metodumuz)
        validationSchema: registerPageSchema //* yup u bağlıyoruz
    });


    //* formu resetledik 
    const clear = () => {
        resetForm();  //* form içindeki herşeyi sil 
    }


    return (
        <div className="login">
            <div className='main'>
                <form onSubmit={handleSubmit}>
                    <div className='form-div'>
                        <TextField
                            sx={{ width: '300px', marginBottom: '25px' }}
                            id="username"
                            placeholder='Kullanıcı Adı'
                            value={values.username}
                            onChange={handleChange}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <IoPersonCircleSharp />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            variant="standard"
                            helperText={errors.username && <span style={{ color: "red" }}>{errors.username}</span>}
                        />

                        <TextField
                            sx={{ width: '300px', marginBottom: '25px' }}
                            id="password"
                            type='password'
                            placeholder="Şifre"
                            value={values.password}
                            onChange={handleChange}
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <FaLock />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            variant="standard"
                            helperText={errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
                        />

                        <div>
                            <Button type='submit' size='small' sx={{ textTransform: 'none', height: '28px', marginRight: '10px' }} variant='contained' color='info'>Giriş Yap</Button>

                            <Button onClick={clear} size='small' sx={{ textTransform: 'none', height: '28px', backgroundColor: '#CDA735' }} variant='contained' >Temizle</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage