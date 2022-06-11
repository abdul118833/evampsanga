import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { uiSliceActions } from '../../store/uiSlice'

const SideDrawer = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const toggle = () => {
        dispatch(uiSliceActions.toggleDrawer())
    }
    const toggleAndNavigate = () => {
        toggle()
        navigate('addUser')
    }
    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-gray-800 z-10 p-8'>
            <div className='absolute top-3 right-3'>
                <span onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
            </div>
            <div className='w-full flex justify-center mt-8'>
                <Link to='/'><img src='/company.png' alt='image' /></Link>
            </div>
            <div className='w-full mt-4'>
                <button className='bg-blue-400 py-2 px-4 text-white rounded-lg text-sm w-full' onClick={toggleAndNavigate}>Add User</button>
            </div>
        </div>
    )
}

export default SideDrawer