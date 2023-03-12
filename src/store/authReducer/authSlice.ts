import { createSlice } from '@reduxjs/toolkit';


interface initialStateInterface {
    authenticated: Boolean;
    loading: Boolean;
    error: Boolean;
    user: {}
} 

const initialState = {
    authenticated: false,
    loading: false,
    error: false,
    user: {}
}
export const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{
        onRegister:(state: initialStateInterface, payload ) => {
            state.authenticated = true;
            state.loading = false;
            state.user = payload;
        },
        onLoadingRegister: (state:initialStateInterface ) => {
            state.loading = true;
            state.authenticated = false
        },
        onLogout: (state: initialStateInterface) => {
            state.authenticated = false;
            state.loading = false;
        },
        onError: (  state) => {
            state.error = true;
        }
    }
});

export const { onLoadingRegister, onLogout, onRegister, onError } = authSlice.actions;