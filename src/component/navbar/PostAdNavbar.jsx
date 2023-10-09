import React from 'react'
import logo from '../../assets/Logo.svg'
import { Link, useNavigate } from 'react-router-dom'

function PostAdNavbar() {
    const navigate = useNavigate()
  return (
    <div className='p-4 py-6 border-b border-borderColor'>
        <div className='container mx-auto flex justify-between items-center'>
          <Link to="/">
        <img src={logo} alt="" />
        </Link>
        <div  className='text-SkyColor font-medium '>
            <Link to="/">
            Cancel
            </Link></div>
        </div>
    </div>
  )
}

export default PostAdNavbar