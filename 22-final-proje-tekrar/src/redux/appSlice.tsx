import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ProductType, UserType } from '../types/Types'

export interface AppSliceType {
    currentUser: UserType | null,
    loading: boolean
    products: ProductType[],
    drawer: boolean
}



const initialState: AppSliceType = {
    currentUser: null, // anlık giriş yapan kullanıcı 
    loading: false, // spinner (yüklenme işareti)
    products: [], // ürünler
    drawer: false
}


export const appSlice = createSlice({
    name: 'app',
    initialState,


    reducers: {
        setLoading: (state: AppSliceType, action: PayloadAction<boolean>) => {
            state.loading = action.payload;  // payload dan gelen loading değerini yukarıdaki loading e verdik 
        },

        setCurrentUser: (state: AppSliceType, action: PayloadAction<UserType | null>) => {
            state.currentUser = action.payload; // payload dan gelen user ı currentuser a verdik 
        },
        setProducts: (state: AppSliceType, action: PayloadAction<ProductType[]>) => {
            state.products = action.payload; // payload dan gelen ürünleri verdik 
        },
        filterProducts: (state: AppSliceType, action: PayloadAction<string>) => {
            const tempList: ProductType[] = []; // filtrelenen ürünleri getir dedik 

            state.products.map((product: ProductType) => {

                if (product.title.toLowerCase().includes(action.payload.toLowerCase())) {
                    tempList.push(product); // boş diziye ürünü ekledik
                }
            })
            state.products = [...tempList];
        },
        setDrawer: (state: AppSliceType, action: PayloadAction<boolean>) => {
            state.drawer = action.payload;  // payload dan gelen drawer değerini yukarıdaki drawer e verdik 
        },
        updateBalance: (state: AppSliceType, action: PayloadAction<UserType>) => {
            const user: UserType = {
                ...action.payload
            }

            state.currentUser = user;
            localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
        },

    },
})





export const { setLoading, setCurrentUser, setProducts, filterProducts, setDrawer, updateBalance } = appSlice.actions
export default appSlice.reducer
