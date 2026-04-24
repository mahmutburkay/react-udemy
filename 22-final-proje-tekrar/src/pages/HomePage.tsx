import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { ProductType, UserType } from '../types/Types';
import { setCurrentUser, setLoading, setProducts } from '../redux/appSlice';
import ProductService from '../services/ProductService';
import { toast } from 'react-toastify';
import ProductCard from '../components/ProductCard';
import type { RootState } from '../redux/store';
import Category from '../components/Category';
import Container from '@mui/material/Container';


function HomePage() {

    const dispatch = useDispatch();

    const { products } = useSelector((state: RootState) => state.app); //* redux tan ürünleri çektik


    const getAllProducts = async () => { // ürünleri çekip redux a verdik 
        try {
            dispatch(setLoading(true));

            const response: ProductType[] = await ProductService.getAllProduct();
            if (response) {
                console.log(response);
                dispatch(setProducts(response)) // ürünleri redux a kaydet
            }

        } catch (error) {
            toast.error("Ürün Bulunamadı")
        }
        finally {
            dispatch(setLoading(false))
        }
    }


    useEffect(() => {  // sayfa yüklendiğinde ürünleri çekmek için isteği at 
        getAllProducts();
    }, [])






    useEffect(() => {  //* kullanıcıyı reduxa yazma 
        const result = localStorage.getItem("currentUser") // storage tan user ı çektik 

        if (result) {
            const currentUser: UserType = JSON.parse(result) as UserType // userType tipine çevirdik 
            dispatch(setCurrentUser(currentUser)) // redux a verdik 
        }
    }, [])







    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start' }}>

            <Category />

            <Container maxWidth="xl">
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: 'center', flexWrap: "wrap" }}>
                    {
                        products && products.map((product: ProductType, index: number) => (
                            <ProductCard key={index} product={product} />
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default HomePage
