import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { userActions } from '../../store/userSlice'

const AddUser = () => {
    let navigate = useNavigate()
    let dispatch = useDispatch()
    const [user, setUser] = useState({
        id: uuidv4(),
        name: '',
        email: '',
        username: '',
        phone: '',
        website: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(userActions.addUser(user))
        navigate('/')
    }
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <div className='container mx-auto flex justify-center mb-10 md:mb-0'>
            <div className='w-full md:w-96 border p-4 rounded shadow-md text-gray-800 mx-2 my-2'>
                <p className='text-center font-bold text-2xl mb-4'>Add User</p>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label htmlFor='name' className='text-xs mb-2 font-bold'>Name</label>
                        <input
                            id='name'
                            placeholder='Enter name'
                            name="name"
                            className='border rounded p-2 focus:outline-none'
                            value={user.name}
                            onChange={handleChange} />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label htmlFor='userName' className='text-xs mb-2 font-bold'>User Name</label>
                        <input
                            id='userName'
                            placeholder='Enter userame'
                            name='username'
                            className='border rounded p-2 focus:outline-none'
                            value={user.username} onChange={handleChange} />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label htmlFor='email' className='text-xs mb-2 font-bold'>Email</label>
                        <input
                            id='email'
                            placeholder='Enter email'
                            name='email'
                            className='border rounded p-2 focus:outline-none'
                            value={user.email}
                            onChange={handleChange} />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label htmlFor='phone' className='text-xs mb-2 font-bold'>Phone</label>
                        <input
                            id='phone'
                            placeholder='Enter phone'
                            name='phone'
                            className='border rounded p-2 focus:outline-none'
                            value={user.phone}
                            onChange={handleChange} />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label htmlFor='website' className='text-xs mb-2 font-bold'>Website</label>
                        <input
                            id='website'
                            placeholder='Enter website name'
                            name='website'
                            className='border rounded p-2 focus:outline-none'
                            value={user.website}
                            onChange={handleChange} />
                    </div>
                    <button type='submit'
                        className='bg-blue-500 rounded-lg w-full text-white p-2 mt-8'>Add user</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser