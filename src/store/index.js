import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        userReducer: userSlice.reducer,
        uiReducer: uiSlice.reducer
    }
})

export default store