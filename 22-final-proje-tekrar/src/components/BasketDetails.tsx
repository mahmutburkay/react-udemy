import React, { useEffect } from 'react'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import { setDrawer, updateBalance } from '../redux/appSlice';
import type { ProductType, UserType } from '../types/Types';
import { Button } from '@mui/material';
import { calculateBasket, removeProductFromBasket, setBasket } from '../redux/basketSlice';
import { toast } from 'react-toastify';


function BasketDetails() {

    const dispatch = useDispatch();

    const { drawer, currentUser } = useSelector((state: RootState) => state.app)
    const { basket, totalAmount } = useSelector((state: RootState) => state.basket)

    useEffect(() => {
        dispatch(calculateBasket()) // sepet toplam fiyat hesaplama
    }, [basket]) // basket her değiştiğinde çalış 

    const closeDrawer = () => {
        dispatch(setDrawer(false));
    }

    const removeProduct = (productId: number) => {
        dispatch(removeProductFromBasket(productId));
    }


    const buy = () => {
        if (currentUser?.balance && currentUser?.balance < totalAmount) {
            toast.warn("Bakiyeniz yeterli değil")
            return;
        }
        if (currentUser?.balance) { // bakiye yeterliyse
            const remaninigTotal = currentUser.balance - totalAmount; // kalan tutar

            const payload: UserType = {
                ...currentUser,
                balance: remaninigTotal // yeni tutarı düzelttik
            }
            dispatch(updateBalance(payload));
            dispatch(setBasket([]));
            localStorage.removeItem("basket");
            toast.success("ürünler satın alınmıştır")
        }
    }


    return (
        <Drawer open={drawer} anchor='right' sx={{ width: '400px' }} onClose={closeDrawer}>

            {
                basket && basket.map((product: ProductType) => (
                    <>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', padding: '20px 30px' }}>
                            <div style={{ marginRight: '15px' }}><img src={product.image} width={60} height={60} alt="" /></div>
                            <div style={{ width: '300px' }}>
                                <div style={{ fontFamily: 'arial', fontWeight: 'bold' }}>{product.title.substring(0, 30)}</div>
                                <div>{product.description.substring(0, 40)}</div>
                            </div>
                            <div style={{ marginRight: '40px' }}>{product.count}</div>
                            <div style={{ fontFamily: 'arial', fontSize: '15px', fontWeight: 'bold', width: '70px' }}>{product.price}₺</div>
                            <div><Button onClick={() => removeProduct(product.id)} size='small' sx={{ textTransform: 'none', height: '25px' }} variant='outlined'>Çıkar</Button></div>
                        </div>


                    </>
                ))
            }

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontSize: '18px', fontFamily: 'arial' }}>Toplam Tutar : {totalAmount} ₺</div>
                <div><Button onClick={buy} sx={{ textTransform: 'none', height: '25px', marginTop: '20px' }} size='small' variant='contained' color='success'>Satın al</Button></div>
            </div>


        </Drawer >
    )
}

export default BasketDetails