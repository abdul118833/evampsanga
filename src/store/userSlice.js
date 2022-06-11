import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [],
    },
    reducers: {

        // All Users Reducer

        allUsers(state, action) {
            state.users = action.payload
            localStorage.setItem('users', JSON.stringify(state.users))
        },

        // Add User Reducer

        addUser(state, action) {
            let updateUsers = state.users
            updateUsers.push(action.payload)
            state.users = updateUsers
            localStorage.setItem('users', JSON.stringify(state.users))

        },

        // Delete User Reducer

        deleteUser(state, action) {
            let updateUsers = state.users.filter((user) => {
                return user.id !== action.payload
            })
            state.users = updateUsers
            localStorage.setItem('users', JSON.stringify(state.users))

        },

        // Update User Reducer

        updateUser(state, action) {
            let updateUser = state.users
            let findUser = updateUser.findIndex((user) => {
                return String(user.id) === String(action.payload.id)
            })
            updateUser[findUser] = action.payload
            state.users = updateUser
            localStorage.setItem('users', JSON.stringify(state.users))

        }
    }
})

// Side Effect or Api call
export const getAllUsersList = (cart) => {
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
            dispatch(userActions.allUsers(response.data))
            localStorage.setItem('isFirstTime', 1)
        }).catch(e => {
            throw new Error('Error in Api Fetching')
        })
    }
}

export const userActions = userSlice.actions
export default userSlice