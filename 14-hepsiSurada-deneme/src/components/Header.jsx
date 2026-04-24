import React, { useState } from 'react'
import "../css/Header.css"
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';

function Header() {

    const [theme, setTheme] = useState("false");  // state tanımladık (tema koyu-açık tutma)

    const navigate = useNavigate();

    const { products } = useSelector((store) => store.basket);  // sepeti gösterme

    const dispatch = useDispatch();


    //* Temayı siyah yapma 
    const changeTheme = () => {

        const root = document.getElementById("root"); // tüm uygulamayı saran rootu getir

        if (theme) {
            root.style.background = "black";
            root.style.color = "#fff";
        } else {
            root.style.background = "#fff";
            root.style.color = "black";
        }

        setTheme(!theme);  // tersine çevir
    }




    return (
        <div className='main'>
            <div onClick={() => navigate("/")}>
                <img className='logo' src="./src/images/logo4.png" />
            </div>

            <div className='flex-row'>
                <input className='search-input' placeholder='Bir Şeyler Ara' type="text" />

                <div>
                    {
                        theme ? <FaMoon className='icon' onClick={changeTheme} />
                            : <CiLight className='icon' onClick={changeTheme} />
                    }


                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
                        <CiShoppingBasket style={{ marginRight: '8px' }} className='icon' />
                    </Badge>

                </div>
            </div>

        </div>
    )
}

export default Header

