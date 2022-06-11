import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllUsersList, userActions } from '../../store/userSlice'

const Users = () => {
    const usersRedux = useSelector(state => state.userReducer.users)
    const dispatch = useDispatch()
    const [isFirstTime] = useState(localStorage.getItem('isFirstTime'))
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "asdfa"
        },
        {
            id: 2,
            name: "Majid"
        }, {
            id: 3,
            name: "Sajid"
        }, {
            id: 4,
            name: "khalid"
        }, {
            id: 5,
            name: "mubashir"
        }
    ])
    useEffect(() => {
        if (!isFirstTime) {
            dispatch(getAllUsersList(usersRedux))
        } else {
            dispatch(userActions.allUsers(usersRedux))
        }
    }, [])
    return (
        <div className='container mx-auto flex flex-wrap justify-center mb-10'>
            {
                usersRedux.length > 0 ? usersRedux.map((user) => {
                    return <User
                        key={user.id}
                        user={user}
                    />
                }) : 'No Users to Show'
            }
        </div>
    )
}

export default Users

const User = ({ user }) => {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    const deleteUserHandler = (id) => {
        dispatch(userActions.deleteUser(id))
    }
    const updateUserButton = () => {
        navigate(`updateUser/${user.id}`)
    }

    return (
        <div className='border rounded w-full md:w-72 m-2 flex flex-col p-4 shadow-lg' >
            <div>
                <p><strong>Name</strong> : {user.name}</p>
                <p><strong>Email</strong> : {user.email}</p>
                <p><strong>User Name</strong> : {user.username}</p>
                <p><strong>Phone</strong> : {user.phone}</p>
                <p><strong>Website</strong> : {user.website}</p>
            </div>
            <div className='flex justify-between mt-4'>
                <button className='bg-green-500 text-white font-bold p-2 rounded' onClick={updateUserButton}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </span>
                </button>
                <button className='bg-red-500 text-white font-bold p-2 rounded'
                    onClick={() => deleteUserHandler(user.id)}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    )
}
