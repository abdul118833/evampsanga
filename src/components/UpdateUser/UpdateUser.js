import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { userActions } from '../../store/userSlice'

const UpdateUser = () => {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    const { id } = useParams()
    const [user, setUser] = useState({})
    const usersRedux = useSelector(state => state.userReducer.users)
    let user_find = usersRedux.find((user) => {
        return String(user.id) === String(id)
    })
    const oldUser = () => {
        let newUser = { ...user_find }
        setUser(newUser)
    }
    useEffect(() => {
        oldUser()
    }, [])

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const updateUserHandler = (e) => {
        e.preventDefault()
        dispatch(userActions.updateUser(user))
        navigate('/')
    }
    return (
        <div className='container mx-auto flex justify-center'>
            <div className='w-full md:w-96 border p-4 rounded shadow-md text-gray-800 mx-2'>
                <p className='text-center font-bold text-2xl mb-4'>Update User</p>
                <form onSubmit={updateUserHandler}>
                    <div className='flex flex-col'>
                        <label htmlFor='name' className='text-xs mb-2 font-bold'>Name</label>
                        <input
                            id='name'
                            placeholder='Enter name'
                            name="name"
                            className='border rounded p-1 focus:outline-none'
                            value={user.name || ''}
                            onChange={handleChange} />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label htmlFor='userName' className='text-xs mb-2 font-bold'>User Name</label>
                        <input
                            id='userName'
                            placeholder='Enter userame'
                            name='username'
                            className='border rounded p-1 focus:outline-none'
                            value={user.username || ""}
                            onChange={handleChange} />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label htmlFor='email' className='text-xs mb-2 font-bold'>Email</label>
                        <input
                            id='email'
                            placeholder='Enter email'
                            name='email'
                            className='border rounded p-1 focus:outline-none'
                            value={user.email || ""}
                            onChange={handleChange} />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label htmlFor='phone' className='text-xs mb-2 font-bold'>Phone</label>
                        <input
                            id='phone'
                            placeholder='Enter phone'
                            name='phone'
                            className='border rounded p-1 focus:outline-none'
                            value={user.phone || ""}
                            onChange={handleChange} />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label htmlFor='website' className='text-xs mb-2 font-bold'>Website</label>
                        <input
                            id='website'
                            placeholder='Enter website name'
                            name='website'
                            className='border rounded p-1 focus:outline-none'
                            value={user.website || ""}
                            onChange={handleChange} />
                    </div>
                    <button type='submit' className='bg-blue-500 rounded-lg w-full text-white p-2 mt-8'>Update user</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser