import React, { useEffect, useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { setLoading, setProducts } from '../redux/appSlice';
import { toast } from 'react-toastify';
import CategoryService from '../services/CategoryService';
import ProductService from '../services/ProductService';
import type { ProductType } from '../types/Types';

function Category() {

    const dispatch = useDispatch();


    //* KATEGORİLERİ GETİRME
    const [categories, setCategories] = useState<string[]>();  // kategorileri state te tutacaz
    const getAllCategories = async () => {
        try {
            dispatch(setLoading(true));

            const category: string[] = await CategoryService.getAllCategories(); // isteği attık 
            setCategories(category) //* çektiğimiz veriyi state e verdik 

        } catch (error) {
            toast.error("Kategori listesi alınırken hata oluştu" + error)
        }
        finally {
            dispatch(setLoading(false))
        }
    }

    useEffect(() => { //sayfa ilk yüklendiğinde aşağıdaki metoddu çalıştır
        getAllCategories();
    }, [])








    //* BASILAN KATEGORİYE GÖRE FİLTRELEME
    const handleCategory = async (e: React.ChangeEvent<HTMLInputElement>, categoryName: string) => {
        try {
            dispatch(setLoading(true));

            if (e.target.checked) {
                // kategoriye göre ürünleri getir
                const products: ProductType[] = await CategoryService.getProductByCategory(categoryName);
                dispatch(setProducts(products)); // reduxa a verdik 

            } else {
                // Ekranda bütün ürünleri listele
                const products: ProductType[] = await ProductService.getAllProduct();
                dispatch(setProducts(products)); // reduxa a verdik 
            }

        } catch (error) {
            toast.error("Kategoriler alınırken hata oluştu" + error)
        }
        finally {
            dispatch(setLoading(false))
        }
    }








    return (
        <div style={{ marginTop: '60px', marginLeft: '20px' }}>
            <FormGroup>
                {
                    categories && categories.map((category: string, index: number) => (
                        <FormControlLabel key={index} control=
                            {
                                <Checkbox onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCategory(e, category)} />
                            } label={category}
                        />
                    ))
                }
            </FormGroup>
        </div>
    )
}

export default Category