import { configureStore } from '@reduxjs/toolkit';
import loginStatusReducer from '../loginStatusSlice';
//import checkInStatusReducer from '../checkInStatusReducer';

export default configureStore({
    reducer: {
        loginStatus: loginStatusReducer,
        //checkInStatus: checkInStatusReducer,
    }
}) 
