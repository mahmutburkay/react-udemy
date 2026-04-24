import { createSlice } from '@reduxjs/toolkit'
import { productSlice } from './productSlice';

const getBasketFromStorage = () => {  // storage dan getirme 
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];
}


const initialState = {
    products: getBasketFromStorage(),
    drawer: false,
    totalAmount: 0

}

const writeFromBasketToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket)) // ürünleri storage a yazdırma
}


export const basketSlice = createSlice({
    name: "basket",
    initialState,

    reducers: {

        // sepete ekleme
        addToBasket: (state, action) => {
            const findProduct = state.products && state.products.find((product) => product.id === action.payload.id);
            if (findProduct) {
                //daha önceden eklenmistir.
                const extraProducts = state.products.filter((product) => product.id != action.payload.id);

                findProduct.count += action.payload.count;

                state.products = [...extraProducts, findProduct];
                writeFromBasketToStorage(state.products);

            } else {
                state.products = [...state.products, action.payload];
                writeFromBasketToStorage(state.products);
            }
        },

        setDrawer: (state) => {
            state.drawer = !state.drawer;  // tersini setle
        },

        calculateBasket: (state) => {
            state.products && state.products.map((product) => {
                state.totalAmount += product.price * product.count
            })
        }
    }
})




export const { addToBasket, setDrawer, calculateBasket } = basketSlice.actions
export default basketSlice.reducer

