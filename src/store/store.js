import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './authReducer/authSlice';


const store = configureStore({
    reducer:{
        auth: authSlice.reducer
    }
});


export default store