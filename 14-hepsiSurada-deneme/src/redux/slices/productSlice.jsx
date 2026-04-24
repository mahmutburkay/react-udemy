import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    selectedProduct: {},
    loading: false
}

const BASE_URL = "https://fakestoreapi.com"

export const getAllProducts = createAsyncThunk("getAllProduct", async () => {

    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;

})


export const productSlice = createSlice({
    name: 'product',
    initialState,

    reducers: {
        //Http isteği olmaz ise kullanılır!
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload
        }
    },

    extraReducers: (builder) => {
        //Http isteklerini burada tanımla! // state yukarıdaki değer action: response.data

        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(getAllProducts.fulfilled, (state, actions) => {
            state.loading = false;
            state.products = actions.payload; // gelen data yı state içindeki products dizisine doldur
        })
    }

})



export const { setSelectedProduct } = productSlice.actions

export default productSlice.reducer