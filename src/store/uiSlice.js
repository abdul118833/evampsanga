import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: {
        isDrawer: false
    },
    reducers: {
        toggleDrawer(state) {
            state.isDrawer = !state.isDrawer
        }
    }
})

export const uiSliceActions = uiSlice.actions

export default uiSlice
