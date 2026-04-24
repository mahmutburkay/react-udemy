import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ProductType } from '../types/Types'


export interface basketSliceType {
    basket: ProductType[],
    totalAmount: number
}


const initialState: basketSliceType = {
    basket: [],
    totalAmount: 0
}


const basketSlice = createSlice({
    name: "basket",
    initialState,

    reducers: {
        addProductToBasket: (state: basketSliceType, action: PayloadAction<ProductType>) => {
            if (state.basket.length == 0) {
                // sepet boşsa 
                state.basket = [action.payload]
            } else {
                // sepet doluysa ve sepet içinde aynı ürün var mı kontrol et 
                const findProduct = state.basket.find((product: ProductType) => product.id === action.payload.id);
                if (findProduct) {// Bu ürün daha önceden eklenmiş

                    if (findProduct.count && action.payload.count) {
                        findProduct.count = findProduct.count + action.payload.count; // ürün sayısını güncelledik.

                        state.basket = [...state.basket.map((product: ProductType) =>
                            product.id === findProduct.id ? findProduct : product //** şu kısım önemli  */
                            //* id eşitse yeni ürünü (findProduct), değilse eski ürünü (product) diziye ekle 
                        )]
                    }
                }

                else {
                    //Ürün eklenmemiş 
                    state.basket = [...state.basket, action.payload]
                }
            }
            localStorage.setItem("basket", JSON.stringify(state.basket));
        },

        setBasket: (state: basketSliceType, action: PayloadAction<ProductType[]>) => {
            state.basket = [...action.payload];
        },
        calculateBasket: (state: basketSliceType) => {
            let Amount: number = 0;
            state.basket && state.basket.map((product: ProductType) => {
                if (product.count) {
                    Amount += product.price * product.count;
                }
            })
            state.totalAmount = Amount;
        },
        removeProductFromBasket: (state: basketSliceType, action: PayloadAction<number>) => {
            state.basket = [...state.basket.filter((product: ProductType) => product.id !== action.payload)];
            localStorage.setItem("basket", JSON.stringify(state.basket));
        }

    }
})




export const { addProductToBasket, setBasket, calculateBasket, removeProductFromBasket } = basketSlice.actions
export default basketSlice.reducer