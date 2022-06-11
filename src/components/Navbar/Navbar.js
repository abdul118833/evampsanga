import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { uiSliceActions } from '../../store/uiSlice'

const Navbar = () => {
    const dispatch = useDispatch()
    const toggle = () => {
        dispatch(uiSliceActions.toggleDrawer())
    }
    return (
        <div className='container mx-auto flex py-4 px-2 md:px-2'>
            <div className='w-1/2 flex items-center'>
                <Link to='/'><img src='/company.png' alt='image' /></Link>
            </div>

            <div className='w-1/2 flex items-center justify-end'>
                <div className='md:hidden' onClick={toggle}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </span>
                </div>
                <Link to='addUser'>
                    <button className='bg-blue-400 py-2 px-4 text-white rounded-lg text-sm hidden md:flex'>Add User</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar