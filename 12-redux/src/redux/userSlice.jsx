import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    users: [],
    loading: false
}

//* istek atmak için örnek
// const fetchUserById = createAsyncThunk(
//     'users/fetchByIdStatus',  
//     async (userId, thunkAPI) => {
//         const response = await userAPI.fetchById(userId)
//         return response.data
//     },
// )




export const getAllUsers = createAsyncThunk('users', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(response.data);
    return response.data;
})



export const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        //Http isteği olmaz ise kullanılır!
    },

    extraReducers: (builder) => {
        //Http isteklerini burada tanımla! // state yukarıdaki değer action: response.data

        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload; // gelen data yı state içindeki users dizisine doldurma
        })
    }
})

export const { } = userSlice.actions //sadece reducers içindeki fonsiyonlar açılır burada
export default userSlice.reducer