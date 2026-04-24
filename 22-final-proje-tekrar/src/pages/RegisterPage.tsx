import React from 'react'
import "../css/RegisterPage.css"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { registerPageSchema } from '../schemas/RegisterPageSchema';
import RegisterPageServices from '../services/RegisterPageServices';
import type { UserType } from '../types/Types';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {

    const navigate = useNavigate();

    const submit = async (values: any, actions: any) => {
        try {
            const payload: UserType = {
                id: String(Math.floor(Math.random() * 99999)),
                username: values.username,
                password: values.password,
                balance: 1000

            }

            // RegisterPageServices içindeki register fonksiyonuna git isteği at 
            const response = await RegisterPageServices.register(payload);

            if (response) {
                clear();
                toast.success("Kullanıcı kaydedildi");
                navigate("/login");
            }
        } catch (error) {
            toast.error("Kullanıcı kaydedilirken hata oluştu");
        }
    }

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
        <div className="register">
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
                            <Button type='submit' size='small' sx={{ textTransform: 'none', height: '28px', marginRight: '10px' }} variant='contained' color='info'>Kaydol</Button>

                            <Button onClick={clear} size='small' sx={{ textTransform: 'none', height: '28px', backgroundColor: '#CDA735' }} variant='contained' >Temizle</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage
