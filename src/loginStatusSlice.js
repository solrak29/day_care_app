import { createSlice } from '@reduxjs/toolkit';

export const loginStatusSlice = createSlice({
    name: "loginStatus",
    initialState: {
        value: false,
        email: null,
        role: null,
    },
    reducers: {
        login: (state, action) => {
            state.value = true;
            state.email= action.payload[0];
            state.role = action.payload[1];
        },
        logout: state => {
            state.value = false;
        }
    }
})

export const selectLogin = (state) => {
    console.log('calling select login')
    console.log(state);
    console.log(`Returning value ${state.loginStatus}`);
    return state.loginStatus;
}

export const {login, logout} = loginStatusSlice.actions;
export default loginStatusSlice.reducer;